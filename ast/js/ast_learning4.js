const parser = require('@babel/parser');
const type = require("@babel/types");
const traverse = require('@babel/traverse').default;
const generate = require('babel-generator').default;

var code = 'var a = ["qqaa", "bbcc"]; var b = a[1]';

const ast = parser.parse(code);

const vistor = {
    "VariableDeclaration"(path){
        console.log(path.scope);
    }

}

traverse(ast, vistor);

console.log(generate(ast,{},code).code);
