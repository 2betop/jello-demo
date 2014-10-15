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

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {
    // css
    // 暂没有太多 css 文件，先不合并
    // 'pkg/all.css': [],

    // js
    // 依赖也会自动打包进来。
    'pkg/app.js': ['page/examples/index.js'],

});

fis.config.set('roadmap.path', [

        // 设置 page/**.js 为 isMod 可以自动包装成 amd
        // 不在 jello 规范里面，暂时放在此配置
        {
            reg: /^\/page\/(.*\.js)$/i,
            isMod: true,
            release: '${statics}/${namespace}/page/$1'
        }
    ].concat(fis.config.get('roadmap.path', [])));

