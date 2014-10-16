require('bootstrap');

var util = require('./util');

var modalTpl = '<div class="modal fade">' +
        '<div class="modal-table">' +
            '<div class="modal-table-cell">' +
                '<div class="modal-dialog modal-danger">' +
                    '<div class="modal-content">' +
                        '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                        '<h4 class="modal-title"><%= this.title %></h4>' +
                        '</div>' +

                        '<div class="modal-body">' +
                        '<p><%= this.content %></p>' +
                        '</div>' +

                        '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-danger btn-confirm"><%= this.confirmTxt %></button>' +
                        '<button type="button" class="btn btn-success btn-cancel" data-dismiss="modal"><%= this.cancelTxt %></button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

var modalTplFn = util.parseTpl(modalTpl);
var noop = function() {};
var defaultOptions = {
    title: '',
    confirmed: noop,
    canceled: noop,
    confirmTxt: '确认',
    cancelTxt: '取消'
}

var confirm = module.exports = function(content, opt) {

    if (typeof opt === 'function') {
        opt = {
            confirmed: opt
        };
    }

    opt = $.extend({}, defaultOptions, opt);

    var dom = $(modalTplFn.call({
        content: content,
        title: opt.title || '提示信息',
        confirmTxt: opt.confirmTxt,
        cancelTxt: opt.cancelTxt
    }));

    dom
        .appendTo('body')
        .on('click', '.btn-confirm', function() {
            opt.confirmed.apply(this, arguments);
            dom.modal('hide');
        })
        .on('click', '.btn-cancel', opt.canceled)
        .modal({
            backdrop: 'static'
        })
        .on('hide.bs.modal', function() {
            dom.remove();
        });
};