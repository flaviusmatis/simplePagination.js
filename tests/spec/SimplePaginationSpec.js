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

    describe('#disable', function() {
        it('disables the pager', function() {
            pager.pagination('disable');

            expect(pager).toBeDisabled();
        })
    })

    describe('#enable', function() {
        it('enables a disabled pager', function() {
            pager.pagination('disable');
            pager.pagination('enable');

            expect(pager).not.toBeDisabled();
        })
    })

    describe('#getPagesCount', function() {
        it('return the number of pages', function() {
            expect(pager.pagination('getPagesCount')).toBe(pageCount);
        })
    })

    describe('#selectPage', function() {
        it('changes to the specified page', function() {
            var page = pageCount - 1;
            pager.pagination('selectPage', page);

            expect(pager).toBeOnPage(page);
        })
    })

    describe('#getCurrentPage', function() {
        it('returns the current page number', function() {
            expect(pager.pagination('getCurrentPage')).toBe(1);

            var page = pageCount - 1;
            pager.pagination('selectPage', page);

            expect(pager.pagination('getCurrentPage')).toBe(page);
        })
    })

    describe('#prevPage', function() {
        it('pages to the previous page', function() {
            var page = pageCount - 1;
            var expected = page - 1;
            pager.pagination('selectPage', page);

            pager.pagination('prevPage');

            expect(pager).toBeOnPage(expected);
        })

        it('does not go to page 0', function() {
            var expected = pager.pagination('getCurrentPage');

            pager.pagination('prevPage');

            expect(pager).toBeOnPage(expected);
        })
    })

});