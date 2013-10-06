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

    describe('#redraw', function() {
        it('recreates a destroyed pager', function() {
            pager.pagination('destroy');
            pager.pagination('redraw');

            expect(pager).toBePaged();
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
            var expectedPage = pageCount;
            pager.pagination('selectPage', expectedPage);

            expect(pager).toBeOnPage(expectedPage);
        })
    })

    describe('#getCurrentPage', function() {
        it('returns the current page number', function() {
            expect(pager.pagination('getCurrentPage')).toBe(1);

            var expectedPage = pageCount;
            pager.pagination('selectPage', expectedPage);

            expect(pager.pagination('getCurrentPage')).toBe(expectedPage);
        })
    })

    describe('#prevPage', function() {
        it('pages to the previous page', function() {
            pager.pagination('selectPage', pageCount);

            var expectedPage = pager.pagination('getCurrentPage') - 1;

            pager.pagination('prevPage');

            expect(pager).toBeOnPage(expectedPage);
        })

        it('does not go to page 0', function() {
            var expectedPage = pager.pagination('getCurrentPage');

            pager.pagination('prevPage');

            expect(pager).toBeOnPage(expectedPage);
        })
    })

    describe('#nextPage', function() {
        it('does not page past the last', function() {
            var expectedPage = pageCount;

            pager.pagination('selectPage', pageCount);
            pager.pagination('nextPage');

            expect(pager).toBeOnPage(expectedPage);
        })

        it('pages to the previous page', function() {
            var expectedPage = pager.pagination('getCurrentPage') + 1;

            pager.pagination('nextPage');

            expect(pager).toBeOnPage(expectedPage);
        })
    })

});