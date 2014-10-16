require('libs/scrollspy');
var $ = require('jquery');
var $toc = $('.jello-toc');


$toc.each(function() {
    var $this = $( this ),
        postion = $this.offset();

    $this.affix({
        offset: {
            top: postion.top - 80
        }
    });
});

if ( $toc.length ) {
    $('body').scrollspy({ target: '.jello-toc' });
}