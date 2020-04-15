describe('Go to Twitter and Login', () => {
    it('Homepage', () => {
        cy.visit('https://twitter.com/login');

    });

    it('login', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.findByText('Phone, email, or username').type(username);
        cy.findByText('Password').type(password);
        cy.get('.r-1jgb5lz > form.r-13qz1uu > :nth-child(1) > :nth-child(8) > [data-testid=LoginForm_Login_Button] > .r-1awozwy').click();
    });




});