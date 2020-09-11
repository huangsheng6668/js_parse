const parser = require('@babel/parser');
const fs = require('fs');
const t = require("@babel/types");
const traverse = require('@babel/traverse').default;
const generate = require('babel-generator').default;
let code;
code = fs.readFileSync('./source.js', "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        code = data.toString();
    }
});
let ast = parser.parse(code);


function evalauteStatement(path) {
    let node = path.node;
    // if 代码是否有被花括号包裹
    if (!t.isBlockStatement(node.consequent)) {
        path.node.consequent = t.BlockStatement([path.node.consequent]);

    }
    // else 部分是否有花括号包裹着。
    if (node.alternate !== null && !t.isBlockStatement(node.alternate)) {
        path.node.alternate = t.BlockStatement([path.node.alternate])
    }

    // 判断if里面的test是否为Literal,即字面量
    if (!t.isLiteral(node.test.left) && !t.isLiteral(node.test.right)) return;
    let leftValue = node.test.left.value;
    let rightValue = node.test.right.value;
    let operate = node.test.operator;
    switch (operate) {
        case '===':
            var b = leftValue === rightValue;
            break;
    }
    let test = path.get('test');
    test.replaceInline(t.BooleanLiteral(b));

}

const vistor = {
    IfStatement: {
        enter: [evalauteStatement]
    }
}

traverse(ast, vistor);

code = generate(ast, opts = {jsescOption: {"minimal": true}}, code).code;
fs.writeFile('./after_ast.js', code, (err) => {
});