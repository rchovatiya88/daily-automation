describe('Go to eban search for mens jewelry', () => {
    const pageNum = 1 + Math.floor(Math.random() * 10);

    // before(() => {
    //     // cy.saveCookies();

    // });
    it('Homepage', () => {
        cy.viewport(1280, 1280)
        cy.visit('https://www.ebay.com/b/Mens-Jewelry/10290?Color=Gold&LH_BIN=1&LH_FS=1&Main%2520Stone=Emerald%7CDiamond%7CBlue%2520Topaz%7CCarnelian%7CCitrine%7CCrystal%7CAmethyst%7CAquamarine%7CAlexandrite%7CNo%2520Stone%7COnyx%7COpal%7CPearl%7CPeridot%7CQuartz%7CRuby%7CSapphire%7CSimulated%2520Diamond%7CSpinel%7CTiger%2527s%2520Eye%7CTopaz%7CTurquoise%7CGarnet%7CFire%2520Opal7&Metal%2520Purity=14k&Type=Necklace%7CRing%7CPendant&mag=1&rt=nc&_dmd=1&_fsrp=0&_pgn=2&_sacat=10290&_sop=15&_udhi=1%2C500&_udlo=150');

        //https://www.ebay.com/b/Mens-Jewelry/10290?Color=Gold&LH_BIN=1&LH_FS=1&Main%2520Stone=Emerald%7CDiamond%7CBlue%2520Topaz%7CCarnelian%7CCitrine%7CCrystal%7CAmethyst%7CAquamarine%7CAlexandrite%7CNo%2520Stone%7COnyx%7COpal%7CPearl%7CPeridot%7CQuartz%7CRuby%7CSapphire%7CSimulated%2520Diamond%7CSpinel%7CTiger%2527s%2520Eye%7CTopaz%7CTurquoise%7CGarnet%7CFire%2520Opal7&Metal%2520Purity=14k&Type=Necklace%7CRing%7CPendant&mag=1&rt=nc&_dmd=1&_fsrp=0&_pgn=2&_sacat=10290&_sop=15&_udhi=1%2C500&_udlo=150
        cy.wait(1000);
    });

    it('wait for stuff', () => {
        cy.viewport(1280, 1280)
        cy.wait(1000);
        cy.scrollTo(0, 500)
            // cy.screenshot('ebay-search-results');
            //cypress scroll one page down
            // cy.scrollTo(0, 20)
        cy.wait(1000);
        cy.scrollTo(0, 1000)
        cy.wait(1000);
        cy.scrollTo(0, 2000)
        cy.wait(1000);
        cy.scrollTo(0, 3000)
        cy.wait(1000);
        cy.scrollTo(0, 4000)
        cy.wait(1000);
        cy.scrollTo(0, 5000)
        cy.wait(1000);
        cy.scrollTo(0, 6000)
        cy.wait(1000);
        cy.scrollTo(0, 7000)
        cy.wait(1000);
        cy.scrollTo(0, 8000)
        cy.wait(1000);
        cy.scrollTo(0, 9000)
        cy.wait(1000);
        cy.scrollTo(0, 10000)
            // cy.get('body').screenshot('ebay-search-results-page');

        // cy.get('#gh-ac').type("gold chain with pendant").type('{enter}');
        // cy.get('#gh-btn').click();
    });

    // it('Take a selfie', () => {

    //     // cy.findAllByText('Buy It Now').click({ multiple: true });

    // });




});