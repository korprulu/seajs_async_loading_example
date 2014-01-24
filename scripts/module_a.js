define(function (require, exports, module) {
    alert('this is module a');
    exports.callModuleB = function () {
            require.async('./module_b');
    };
});
