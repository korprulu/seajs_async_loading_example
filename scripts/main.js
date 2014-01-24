seajs.config({
    base: './scripts'
});

seajs.use('./scripts/module_a', function (moduleA) {
    var button = document.getElementById('call_module_b');
    button.addEventListener('click', function () {
        moduleA.callModuleB();
    });
});
