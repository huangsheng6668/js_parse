//当前版本hook工具只支持Content-Type为html的自动hook
//下面是一个示例:这个示例演示了hook全局的cookie设置点
(function() {
    //严谨模式 检查所有错误
    'use strict';
    //document 为要hook的对象   这里是hook的cookie
    Object.defineProperty(i, 'data', {
        //hook set方法也就是赋值的方法
        //当前也可以hook get方法
        set: function(val) {
            //这样就可以快速给下面这个代码行下断点
            //从而快速定位设置cookie的代码
            debugger;
            console.log('Hook捕获到cookie设置->', val);
            return val;
        }
    });
})();
