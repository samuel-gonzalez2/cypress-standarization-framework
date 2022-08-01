/// <reference types="cypress" />

describe('Test Contact us form', () => {
    it.only('Should be able to submit valid data to the contact us form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force:true});
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('asdf@ghjk.com');
        cy.get('textarea.feedback-input').type('Some message');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it('Should not be able to submit invalid data to the contact us form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('textarea.feedback-input').type('Some message');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
});