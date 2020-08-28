/***********************************************************
 ob混淆这类的特征是大数组加位移函数加解密函数
 ***********************************************************/


 const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require('fs');
let ast = parser.parse(jscode)
var jscode = fs.readFileSync('D:\\huangsheng\\self\\js_workspace\\node_workspace\\js_parse\\bitstamp\\js\\source.js', "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        code = data.toString();
    }
});

function unicode2ABC(path) {
    delete path.node.extra;
}

/***********************************************************
 NumericLiteral ---> Literal
 StringLiteral  ---> Literal
 用于处理已十六进制显示的字符串或者数值
 ***********************************************************/
const delete_extra =
    {
        "NumericLiteral|StringLiteral":function(path)
        {
            delete path.node.extra;
        },
    }
traverse(ast, delete_extra);

// 删除加载器下的兄弟节点
function del_enter_bro(path) {
    path
}

const visitor = {
    StringLiteral: {
        enter: [unicode2ABC]
    },
}
let ast = parser.parse(jscode);
traverse(ast, visitor);
let {code} = generator(ast);

fs.writeFile('result.js', code, (err) => {
});