var $ = require('jquery');
var validator = module.exports = require('jquery.validate');

$.extend($.validator.messages, {
    required: "这个字段是必填字段。",
    remote: "请修正这个字段。",
    email: "请填写合格的邮箱地址。",
    url: "请填写合格的 URL 地址。",
    date: "请输入正确的日期。",
    number: "请输入数字格式。",
    digits: "只能输入数字。",
    creditcard: "请填写合格的银行卡号。",
    maxlength: $.validator.format("请不要输入超过 {0} 个字符。"),
    minlength: $.validator.format("请至少输入 {0} 个字符。"),
    rangelength: $.validator.format("请输入 {0} 到 {1} 个字符的内容。"),
    range: $.validator.format("请输入 {0} 到 {1} 之间的值"),
    max: $.validator.format("请不要输入超过 {0} 的数字。"),
    min: $.validator.format("请至少输入的数字至少大于或者等于 {0}。")
});

$.validator.setDefaults({
    ignore: 'input[type=hidden]:not(.form-item)',
    highlight: function(element) {
        var tabcontent = $(element).closest('.tab-pane');

        if (tabcontent.not('.active')) {
            $('a[href=#' + tabcontent.attr('id') + ']').tab('show');
        }

        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else if(element.is('input[type=radio]') && element.closest('.radio-inline').length) {
            error.insertAfter(element.closest('.radio-inline').parent());
        } else {
            error.insertAfter(element);
        }
    }
});