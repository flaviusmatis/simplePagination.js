describe('SimplePagination', function() {

    it('adds pagination elements to an empty container', function() {
        expect(pager).toBePaged();
    })

    describe('#destroy', function() {
        it('visually destroys the pager', function() {
            pager.pagination('destroy');

            expect(pager).not.toBePaged();
        })
    })

    describe('#selectPage', function() {
        it('changes to the specified page', function() {
            var page = (items/itemsOnPage) - 1;
            pager.pagination('selectPage', page);

            expect(pager).toBeOnPage(page);
        })
    })

    describe('#getCurrentPage', function() {
        it('returns the current page number', function() {
            expect(pager.pagination('getCurrentPage')).toBe(1);

            var page = (items/itemsOnPage) - 1;
            pager.pagination('selectPage', page);

            expect(pager.pagination('getCurrentPage')).toBe(page);
        })
    })

});