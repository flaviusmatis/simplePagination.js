var pager;
var items = 100;
var itemsOnPage = 10;

beforeEach(function() {

    $('<div id="pager"></div>').appendTo('body').pagination({
        items: items,
        itemsOnPage: itemsOnPage
    });

    pager = $('#pager');

    this.addMatchers({
        toBePaged: function() {
            return ( this.actual.hasClass('simple-pagination') &&
                     this.actual.find('li').length > 0 );
        },
        toBeOnPage: function(page) {
            return this.actual.find('li.active span').html() == page.toString();
        }
    });

});

afterEach(function () {
    pager.remove();
});