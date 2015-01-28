var path = require('path');

// --------------------------------
// 支持 amd 设置
// --------------------------------
fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('modules.postprocessor.jsp', 'amd');
fis.config.set('settings.postprocessor.amd', {

    packages: [

        // 用来存放 libs 库
        {
            name: 'libs',
            location: 'static/libs/',
            main: 'index'
        }
    ]
});

// --------------------------------
// sass/scss 配置
// --------------------------------

// 设置 sass 的 include_paths 便于组件引入
fis.config.set('settings.parser.sass.include_paths', [
    './static/scss',
    './components/compass-mixins'
]);

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {

    // css
    'pkg/frame.css': ['page/layout/frame.vm'],   // 因为依赖会被打包，所以这个规则会把 frame.vm 依赖的 css 打包在一起。

    // js
    // 依赖也会自动打包进来。
    'pkg/boot.js': ['static/js/require.js', 'components/jquery/jquery.js', 'components/bootstrap/js/bootstrap.js'],
    'pkg/app.js': ['page/examples/form.js']
});


fis.config.set('roadmap.path', [

        {
            reg: /^\/components\/.*\.(?:less|md)$/i,
            release: false
        },

        {
            reg: 'doc/**.md',
            release: false
        },

        {
            reg: /^\/static\/libs\/(.*\.js)$/i,
            isMod: true,
            release: '${statics}/${namespace}/libs/$1'
        }
    ].concat(fis.config.get('roadmap.path', [])));

// markdown 支持，因为需要写文档，不用 markdown 真是不习惯
// npm install -g fis-parser-marked
// use the `fis-parser-marked` plugin to parse *.md file
fis.config.set('modules.parser.md', 'marked');
// *.md will be released as *.html
fis.config.set('roadmap.ext.md', 'html');

// js 模板支持
fis.config.set('modules.parser.tmpl', 'utc');
// fis.config.set('roadmap.ext.tmpl', 'js');
