var pager;
var items = 100;
var itemsOnPage = 10;
var pageCount = items/itemsOnPage;

beforeEach(function() {

    $('<div id="pager" class="pager"></div>').appendTo('body').pagination({
        items: items,
        itemsOnPage: itemsOnPage
    });

    pager = $('#pager');

    this.addMatchers({
        toBePaged: function() {
            return ( this.actual.hasClass('simple-pagination') &&
                     this.actual.find('li').length > 0 );
        },
        toBeOnPage: function(expected_page) {
            actual_page = this.actual.find('li.active span').not('.prev').not('.next').html();
            return actual_page == expected_page;
        },
        toBeDisabled: function() {
            return this.actual.find('li').length == this.actual.find('li.disabled').length;
        },
        toBeSameTextValues:function(expected_pages){
            var pages = this.actual.find('li >').map(function(){ return $(this).text()}).get();
            return expected_pages.join(',') === pages.join(',');
        }
    });

});

afterEach(function () {
    $('.pager').remove();
});