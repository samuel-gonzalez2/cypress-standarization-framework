/// <reference types="cypress" />

describe('Test Contact us form via automation store', () => {
    it('Should be able to submit valid data to the contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.xpath("/html//div[@id='footer']//section[@class='footerlinks']//ul[@class='info_links_footer']//a[@href='https://automationteststore.com/index.php?rt=content/contact']").click();
        cy.get('#ContactUsFrm_first_name').type('John');
        cy.get('#ContactUsFrm_email').type('asdf@asdf.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Some message');
        cy.get('.col-md-6 > .btn').click();

        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});