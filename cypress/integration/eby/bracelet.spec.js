describe('Go to eban search for mens jewelry', () => {
    const pageNum = 1 + Math.floor(Math.random() * 10);

    // before(() => {
    //     // cy.saveCookies();

    // });
    it('Homepage', () => {
        cy.viewport(1280, 1280)
        cy.visit('https://www.ebay.com/b/Mens-Bracelets-Charms/261999/bn_7117879165?rt=nc&LH_BIN=1&LH_FS=1&_sop=15&_udhi=1%2C500&_udlo=150');
        cy.wait(1000);
    });

    it('wait for stuff', () => {
        cy.viewport(1280, 1280)
        cy.wait(1000);
        cy.scrollTo(0, 500)
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
        cy.wait(1000);
        cy.scrollTo(0, 11000)
        cy.wait(1000);
        cy.scrollTo(0, 12000)
        cy.wait(1000);
        cy.scrollTo(0, 13000)
        cy.wait(1000);
        cy.scrollTo(0, 14000)
        cy.wait(1000);
        cy.scrollTo(0, 15000)
        cy.wait(1000);
        cy.scrollTo(0, 15000)
        cy.wait(1000);
        cy.get(':nth-child(3) > .pagination__item').click();
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
        cy.wait(1000);
        cy.scrollTo(0, 11000)
        cy.wait(1000);
        cy.scrollTo(0, 12000)
        cy.wait(1000);
        cy.scrollTo(0, 13000)
        cy.wait(1000);
        cy.scrollTo(0, 14000)
        cy.wait(1000);
        cy.scrollTo(0, 15000)
        cy.wait(1000);
        cy.scrollTo(0, 15000)
        cy.wait(1000);

    });


});