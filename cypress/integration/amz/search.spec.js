describe('Go to amazon search for mens jewelry', () => {
    const pageNum = 1 + Math.floor(Math.random() * 10);

    before(() => {
        // cy.saveCookies();
        cy.viewport(1280, 720)
    });
    it('Homepage', () => {

        cy.viewport(1280, 720) // cy.viewport(1280, 850)
        cy.visit('www.amazon.com');
        cy.wait(1000);
    });

    it('search for Mens Cuban Chain', () => {
        cy.viewport(1280, 720)
        cy.get('#twotabsearchtextbox').type('Mens Cuban Chain');
        cy.get('#nav-search-submit-button').click();
        cy.wait(1000);
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
        cy.wait(1000);
        cy.viewport(1280, 1280)
        cy.wait(600);
        cy.scrollTo(0, 500)
        cy.wait(600);
        cy.scrollTo(0, 1000)
        cy.wait(600);
        cy.scrollTo(0, 2000)
        cy.wait(600);
        cy.scrollTo(0, 3000)
        cy.wait(600);
        cy.scrollTo(0, 4000)
        cy.wait(600);
        cy.scrollTo(0, 5000)
        cy.wait(600);
        cy.scrollTo(0, 6000)
        cy.wait(600);
        cy.scrollTo(0, 7000)
        cy.wait(600);
        cy.scrollTo(0, 8000)
        cy.wait(600);
        cy.scrollTo(0, 9000)
        cy.findByText('Next').click();
    });


});



//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);
//     cy.get(':nth-child(3) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);
//     cy.get(':nth-child(4) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(5) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);
//     cy.get(':nth-child(6) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(7) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(8) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(9) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);
//     cy.get(':nth-child(10) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(11) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(12) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(13) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(14) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(15) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(16) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(17) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(18) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(19) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(20) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(21) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(22) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(23) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(24) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(25) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(26) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(27) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(28) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(29) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);

//     cy.get(':nth-child(30) > .pagination__item').click();
//     cy.wait(600);
//     cy.scrollTo(0, 1000)
//     cy.wait(600);
//     cy.scrollTo(0, 2000)
//     cy.wait(600);
//     cy.scrollTo(0, 3000)
//     cy.wait(600);
//     cy.scrollTo(0, 4000)
//     cy.wait(600);
//     cy.scrollTo(0, 5000)
//     cy.wait(600);
//     cy.scrollTo(0, 6000)
//     cy.wait(600);
//     cy.scrollTo(0, 7000)
//     cy.wait(600);
//     cy.scrollTo(0, 8000)
//     cy.wait(600);
//     cy.scrollTo(0, 9000)
//     cy.wait(600);
//     cy.scrollTo(0, 10000)
//     cy.wait(600);
//     cy.scrollTo(0, 11000)
//     cy.wait(600);