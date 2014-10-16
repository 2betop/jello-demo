require('bootstrap');

var util = require('./util');

var modalTpl = '<div class="modal fade">' +
        '<div class="modal-table">' +
          '<div class="modal-table-cell">' +
            '<div class="modal-dialog modal-<%= this.errorLevel %>">' +
                '<div class="modal-content">' +
                  '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                    '<h4 class="modal-title"><%= this.title %></h4>' +
                  '</div>' +
                  '<div class="modal-body">' +
                    '<p><%= this.content %></p>' +
                  '</div>' +
                  '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>' +
                  '</div>' +
                '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
    '</div>';

var modalTplFn = util.parseTpl(modalTpl);

// errorLevel 至少支持 danger、info、sucess、warning
var alert = module.exports = function(content, errorLevel, title) {
    var dom = $(modalTplFn.call({
        title: title || '提示信息',
        content: content,
        errorLevel: errorLevel || 'info'
    }));

    dom.appendTo('body').modal({
        backdrop: 'static'
    }).on('hide.bs.modal', function() {
        dom.remove();
    });
};