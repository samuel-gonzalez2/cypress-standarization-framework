/// <reference types="cypress" />

describe('Test Contact us form via automation store', () => {
    it('Should be able to submit valid data to the contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type('John');
        cy.get('#ContactUsFrm_email').type('asdf@asdf.com');
        cy.get('#ContactUsFrm_enquiry').type('Some message');
        cy.get('.col-md-6 > .btn').click();
    });
});