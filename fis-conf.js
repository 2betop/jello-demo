//项目排除掉_xxx.scss，这些属于框架文件，不用关心
fis.config.set('project.exclude', '**/_*.scss');

// 支持 amd 设置
fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');

fis.config.set('settings.postprocessor.amd', {

    // 设置 baseUrl 后，js 中可以使用绝对路径引用的 module， 都在 baseUrl 中查找
    baseUrl: './widget/modules',

    paths: {
        jquery: 'components/jquery/jquery.js',
        bootstrap: 'components/bootstrap/js/bootstrap.js'
    },

    shim: {
        'components/bootstrap/js/bootstrap.js': ['jquery']
    }
});

// js uglify 后生成 sourcemap 方便调试。
fis.config.set('settings.optimizer.uglify-js', {
    sourceMap: true
});
