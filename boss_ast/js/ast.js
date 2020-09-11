const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

var jscode = fs.readFileSync('D:\\huangsheng\\self\\js_workspace\\node_workspace\\js_parse\\boss_ast\\js\\source.js', "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        code = data.toString();
    }
});

const visitor = {
    StringLiteral: {
        enter: [unicode2ABC]
    },
    NumericLiteral: {
        enter: [_16To10]
    },
    VariableDeclarator: {
        enter: [renameH, delVarT0SSeqT0SS, parameter2Number]
    },
    CallExpression: {
        enter: [replaceT0SSValue]
    },
    WhileStatement: {
        enter: [reductionWhile]
    },
    MemberExpression: {
        enter: [replaceArrayValue]
    }
}
let ast = parser.parse(jscode);
traverse(ast, visitor);
let {code} = generator(ast);

fs.writeFile('result3.js', code, (err) => {
});