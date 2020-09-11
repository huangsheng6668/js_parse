const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json({limit: "2222222222222222222222kb"}));
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require('fs');

app.post('/ob_ast_server', function (req, res) {
    let jscode = req.body;
    jscode = jscode['data']
    let ast = parser.parse(jscode)
    /***********************************************************
     ob混淆这类的特征是大数组加位移函数加解密函数
     ***********************************************************/

    decode_file = 'D:\\huangsheng\\self\\js_workspace\\node_workspace\\js_parse\\bitstamp\\js\\result.js'
// var jscode = fs.readFileSync('D:\\huangsheng\\self\\js_workspace\\node_workspace\\js_parse\\bitstamp\\js\\source.js', "utf-8", function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         code = data.toString();
//     }
// });

    /***********************************************************
     NumericLiteral ---> Literal
     StringLiteral  ---> Literal
     用于处理已十六进制显示的字符串或者数值
     ***********************************************************/
    const delete_extra =
        {
            "NumericLiteral|StringLiteral": function (path) {
                delete path.node.extra;
            },
        }

    traverse(ast, delete_extra);

// 删除加载器下的多余的节点
    const decode_str = {
        VariableDeclarator(path) {
            let {id, init} = path.node;
            if (!types.isArrayExpression(init) || init.elements.length == 0) return;
            let code = path.toString();

            let second_sibling = path.parentPath.getNextSibling(); //获取移位函数节点
            let third_sibling = second_sibling.getNextSibling();   //获取解密函数节点

            // 开始检测特征
            if (!types.isExpressionStatement(second_sibling) || !types.isVariableDeclaration(third_sibling)) return;
            let expression = second_sibling.get('expression');
            if (!expression.isCallExpression()) return;

            let {callee, arguments} = expression.node;
            if (arguments.length !== 2 ||
                !types.isFunctionExpression(callee) ||
                !types.isIdentifier(arguments[0], {name: id.name}) ||
                !types.isNumericLiteral(arguments[1])
            ) return;

            let {declarations} = third_sibling.node;

            if (!declarations ||
                declarations.length !== 1 ||
                !types.isFunctionExpression(declarations[0].init)
            ) return;

            // 检测结束
            let sourceSecond = second_sibling.toString()
            let thirdFuncName = third_sibling.node.declarations[0].id.name;
            // 开始处理移位函数
            if (sourceSecond.indexOf('removeCookie') !== -1) {
                let second_arg_node = callee.params[1];
                let body = callee.body.body;
                let call_fun = body[0].declarations[0].id;  //解密函数的函数名，用于遍历其作用域
                body.pop();
                body.pop();
                body.push(types.ExpressionStatement(types.UpdateExpression("++", second_arg_node)));
                body.push(types.ExpressionStatement(types.callExpression(call_fun, [second_arg_node])));

                // 位移函数处理结束

                // 处理解密函数开始
                let end = third_sibling.node.end; //防止遍历函数体里的调用
                third_sibling.traverse({
                    AssignmentExpression(path_) {
                        let left = path_.get('left');
                        let leftCode = left.toString()
                        let right = path_.get('right');
                        let rightCode = right.toString();
                        if (rightCode.indexOf(thirdFuncName) === -1 || rightCode.indexOf(leftCode) === -1) return;
                        let ifParantNode = path_.findParent(g => {
                            return g.isIfStatement();
                        });
                        ifParantNode && ifParantNode.replaceWith(path_.node);
                    }
                });
                code += ';!' + second_sibling.toString() + third_sibling.toString();
                //eval到本地环境
                eval(code);

                const binding = third_sibling.scope.getBinding(thirdFuncName);
                if (!binding || binding.constantViolations.length > 0) return;

                let can_removed = true;
                for (const temp of binding.referencePaths) {
                    // 为了处理调用解密函数处，修改为常量，故不能调用到解密函数中
                    if (temp.node.start < end) {
                        continue;
                    }
                    let callPath = temp.findParent(p => {
                        return p.isCallExpression();
                    });
                    try {
                        let fun_value = eval(callPath.toString());
                        console.log('del with fun:', callPath.toString(), '  is value:', fun_value);
                        callPath && callPath.replaceWith(types.valueToNode(fun_value));
                    } catch (e) {
                        can_removed = false;
                    }
                }
                if (can_removed) {
                    path.parentPath.remove();
                    second_sibling.remove();
                    third_sibling.remove();
                }
            }
        }
    }

    traverse(ast, decode_str);

// 处理BinaryExpression
    const decode_binary = {
        BinaryExpression(path) {
            const {confident, value} = path.evaluate();
            if (Infinity === value) return;
            confident && path.replaceWith(types.valueToNode(value));
        }
    }

    traverse(ast, decode_binary);

    /*******************************************************
     还原object，key多为字符串，value为字符串和函数
     *******************************************************/
    const decode_object = {
        VariableDeclarator(path) {
            const {id, init} = path.node;
            if (!types.isObjectExpression(init)) return;
            let name = id.name;
            let properties = init.properties;
            let all_next_siblings = path.parentPath.getAllNextSiblings();

            for (let next_sibling of all_next_siblings) {
                if (!next_sibling.isExpressionStatement()) break;
                let expression = next_sibling.get('expression');
                if (!expression.isAssignmentExpression()) break;

                let {operator, left, right} = expression.node;

                if (operator != '=' || !types.isMemberExpression(left) || !types.isIdentifier(left.object, {name: name})) {

                    break;
                }

                properties.push(types.ObjectProperty(left.property, right));

                next_sibling.remove();

            }

            let scope = path.scope;
            let next_sibling = path.parentPath.getNextSibling();
            if (next_sibling.isVariableDeclaration()) {
                let declarations = next_sibling.node.declarations;

                if (declarations.length == 1 && types.isIdentifier(declarations[0].init, {name: name})) {
                    scope.rename(declarations[0].id.name, name);
                    next_sibling.remove();
                }
            }

            for (const property of properties) {
                let key = property.key.value;
                if (key.length !== 3 && key.length !== 5) {
                    return;
                }
                let value = property.value;
                if (types.isLiteral(value)) {
                    scope.traverse(scope.block, {
                        MemberExpression(_path) {
                            let _node = _path.node;
                            if (!types.isIdentifier(_node.object, {name: name})) return;
                            if (!types.isLiteral(_node.property, {value: key})) return;
                            _path.replaceWith(value);
                        },
                    })
                } else if (types.isFunctionExpression(value)) {
                    let ret_state = value.body.body[0];
                    if (!types.isReturnStatement(ret_state)) continue;
                    scope.traverse(scope.block, {
                        CallExpression: function (_path) {
                            let {callee, arguments} = _path.node;
                            if (!types.isMemberExpression(callee)) return;

                            if (!types.isIdentifier(callee.object, {name: name})) return;
                            if (!types.isLiteral(callee.property, {value: key})) return;

                            if (types.isCallExpression(ret_state.argument) && arguments.length > 0) {
                                _path.replaceWith(types.CallExpression(arguments[0], arguments.slice(1)));
                            } else if (types.isBinaryExpression(ret_state.argument) && arguments.length === 2) {
                                let replace_node = types.BinaryExpression(ret_state.argument.operator, arguments[0], arguments[1]);
                                _path.replaceWith(replace_node);
                            } else if (types.isLogicalExpression(ret_state.argument) && arguments.length === 2) {
                                let replace_node = types.LogicalExpression(ret_state.argument.operator, arguments[0], arguments[1]);
                                _path.replaceWith(replace_node);
                            }
                        }
                    })
                }
            }
            path.remove();//慎重
        },
    }
    traverse(ast, decode_object);

// 处理控制流平坦化
    const decode_while = {
        WhileStatement(path) {
            let {test, body} = path.node;
            let swithchNode = body.body[0];
            if (!types.isUnaryExpression(test) || !types.isSwitchStatement(swithchNode)) return;
            let {discriminant, cases} = swithchNode;
            if (!types.isMemberExpression(discriminant) || !types.isUpdateExpression(discriminant.property)) return;
            let arrayName = discriminant.object.name;
            let per_bro_node = path.getAllPrevSiblings();
            let array = []
            per_bro_node.forEach(per_node => {
                const {declarations} = per_node.node;
                let {id, init} = declarations[0];
                if (arrayName === id.name) {
                    array = init.callee.object.value.split('|');
                }
                per_node.remove();
            });

            let replace_body = [];
            array.forEach(index => {
                    let case_body = cases[index].consequent;
                    if (types.isContinueStatement(case_body[case_body.length - 1])) {
                        case_body.pop();
                    }
                    replace_body = replace_body.concat(case_body);
                }
            );
            path.replaceInline(replace_body);
        }
    }

    traverse(ast, decode_while);

    /************************************
     处理完毕，生成新代码
     *************************************/
    let {code} = generator(ast);
    fs.writeFile(decode_file, code, (err) => {
    });
    res.send(code);
});

app.listen(3420, () => console.log("开启解析bitstamp加密服务"));