
$(function () {
    // Test suite regarding RSS Feeds array.
    // It contains all names and urls of the used feed
    describe('RSS Feeds', function () {
        // The test below makes sure that the
        // allFeeds variable has been defined and that it is not
        // empty.
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // The test below loops through each feed
        // in the allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.        
        it('Every feed have an URL, and its not empty', function () {
            allFeeds.forEach(rss => {
                expect(rss.url).toBeDefined();
                // expect(rss.url.length).toBeGreaterThan(1);
                expect(rss.url.length).toBeGreaterThan(1, 'url can not be empty');
            })
        });
        // The test below loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty. 
        it('Every feed have a name, and its not empty', function () {
            allFeeds.forEach(rss => {
                expect(rss.name).toBeDefined();
                // expect(rss.name.length).toBeGreaterThan(1);
                expect(rss.name.length).toBeGreaterThan(1, 'name can not be empty');
            })
        });
    });
    // Test suite regarding the site menu.
    describe('The menu', function () {
        // The test below ensures the menu element is
        // hidden by default.    
        it('Menu should be hidden by default', function () {
            let className = document.querySelector('body').className;
            expect(className).toBe('menu-hidden');
        });
        // The test beloe ensures the menu changes
        // visibility when the menu icon is clicked.
        it('Menu should toggle visibility when clicked', function () {
            let menu = $('.menu-icon-link');
            let body = $('body');
            //First we click and test if the hidden class has been removed:
            menu.trigger('click');
            expect(body[0].className).toBe('');
            //Then we click again and test if it has been added:
            menu.trigger('click');
            expect(body[0].className).toBe('menu-hidden');
        });

    });
    // Test suite regarding Initial Entries.

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
