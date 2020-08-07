Function.prototype.constructor_back = Function.prototype.constructor;
Function.prototype.constructor = function() {
    if(arguments && typeof arguments[0]==='string'){
        //alert("new function: "+ arguments[0]);
        if("debugger" === arguments[0]){
            arguments[0]="console.log(\"anti debugger\");";
        }
    }
    return Function.prototype.constructor_back.apply(this,arguments);
};
