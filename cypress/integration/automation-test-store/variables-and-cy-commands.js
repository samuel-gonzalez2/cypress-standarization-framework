/// <reference types="cypress" />

describe('Verify variables, JQuery and Cypress commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        
        const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        makeUpLink.click()
        
        const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        skinCareLink.click()
    });
});