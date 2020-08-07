const parser = require('@babel/parser');
const type = require("@babel/types");
const traverse = require('@babel/traverse').default;
const generate = require('babel-generator').default;

var code = 'var s=92;b=Z(1324801,s);';

const ast = parser.parse(code);


var s;
traverse(ast, {
    // 把s替换为92
    Identifier(path){
        console.log(path.evaluate());
        let {confident, value} = path.evaluate();
        confident && path.replaceWith(type.valueToNode(value));
    }
});

console.log(generate(ast, {compact:true}, code));
