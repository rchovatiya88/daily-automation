describe('Go to eban search for mens jewelry', () => {
    const pageNum = 1;
    it('Homepage', () => {
        cy.visit('https://www.ebay.com/b/Mens-Jewelry/10290?Color=Gold&Main%2520Stone=Diamond&Metal=Yellow%2520Gold&Metal%2520Purity=14k&LH_BIN=1&Type=Necklace%7CRing%7CPendant&rt=nc&_udlo=150&_udhi=1%2C500&mag=' + pageNum);

    });

    it('wait for stuff', () => {
        cy.wait(5000);
        // cy.get('#gh-ac').type("gold chain with pendant").type('{enter}');
        // cy.get('#gh-btn').click();
    });

    it('Take a selfie', () => {
        cy.screenshot(pageNum + '_ebay_search_results');
        // cy.findAllByText('Buy It Now').click({ multiple: true });

    });




});