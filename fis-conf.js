// --------------------------------
// 支持 amd 设置
// --------------------------------
fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');

fis.config.set('settings.postprocessor.amd', {

    // 设置 baseUrl 后，js 中可以使用绝对路径引用的 module， 都在 baseUrl 中查找
    baseUrl: './',

    paths: {
        jquery: 'components/jquery/jquery.js',
        bootstrap: 'components/bootstrap/js/bootstrap.js',
        'jquery-ui': 'components/jquery-ui/ui/',
        'jquery.validate': 'components/jquery-validate/jquery.validate.js'
    },

    packages: [

        // 用来存放 libs 库
        {
            name: 'libs',
            location: 'widget/libs/',
            main: 'index'
        },


        // 用来存放页面脚本入口
        {
            name: 'app',
            location: 'widget/app/',
            main: 'index'
        }
    ],

    // 设置 bootstrap 依赖 jquery
    shim: {
        'components/bootstrap/js/bootstrap.js': ['jquery']
    }
});

// --------------------------------
// js uglify 后生成 sourcemap 方便调试。
// --------------------------------
fis.config.set('settings.optimizer.uglify-js', {
    sourceMap: true
});

// --------------------------------
// sass/scss 配置
// --------------------------------

// 设置 sass 的 include_paths 便于组件引入
fis.config.set('settings.parser.sass.include_paths', [
    'components/compass',
    'static/scss'
]);

// 项目排除掉_xxx.scss、xxx.min.js
fis.config.set('project.exclude', /((.*\/)?\_[^\/]*\.scss$|.*\.min\.js$)/i);