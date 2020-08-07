const parser = require('@babel/parser');
const type = require("@babel/types");
const traverse = require('@babel/traverse').default;
const generate = require('babel-generator').default;
const code = 'function square(n) {' +
    '   return n * n;' +
    '  }';

var ast = parser.parse(code);

traverse(ast, {
    BinaryExpression(path){
        // if (path.node.operator === '==='){
        //     path.node.left = type.identifier('left');
        //     path.node.right = type.identifier('right');
        // }
        console.log(path.node)
    }

});

console.log(generate(ast, {conpact:true,sourceMaps:true}, code));
