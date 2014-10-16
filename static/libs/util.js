var $ = require('jquery');
var util = module.exports = {};

// 一个简单的模板机制，完全是为了演示而用。
util.parseTpl = function(str, locals) {
    var code = "var p=[];" +

        "p.push('" +

        // Convert the template into pure JavaScript
        str
            .replace(/[\r\t\n]/g, " ")
            .split("<%").join("\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t").join("');")
            .split("%>").join("p.push('")
            .split("\r").join("\\'") +

        "');return p.join('');";

    var fn = new Function(code);
    var wrap = function(locals) {
        locals = locals || this;
        locals._$ = $;
        return fn.call(locals);
    };
    return locals ? wrap.call(locals) : wrap;
};