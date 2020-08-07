const parser = require('@babel/core');
const fs = require('fs');
const type_babel = require("babel-types");
const generate = require("babel-generator").default;
const traverse = require('@babel/traverse').default;
const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
    enter(path){
        if(type_babel.isIdentifier(path.node, {name: 'n'})){
            path.node.name = 'x';
            console.log(path.toString());
        }
    }
});
let transfer_code = (generate(ast, {retainLines: false,
    compact: "auto",
    concise: false,
    quotes: "double",}, code).code);

fs.writeFile('./ast/js/transer_after.js', transfer_code, (err)=>{});
