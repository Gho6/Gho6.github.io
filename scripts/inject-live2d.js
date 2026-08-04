// scripts/inject-live2d.js
hexo.extend.filter.register('theme_inject', function (injects) {
    // 将脚本注入到页面的 body 结束之前（即 </body> 前）
    hexo.extend.injector.register(
        'bodyEnd', // 注入点：页面底部[reference:5][reference:6]
        '<script src="/live2d/live2d.js" defer></script>', // 要注入的内容
        'default' // 应用于所有页面[reference:7][reference:8]
    );
});