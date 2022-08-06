/// <reference types="cypress" />

describe('Iterate over elements', () => {
    it('Logs products for specific category', () => {
        cy.visit('https://automationteststore.com/') 
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Product: " + $el.text() + " at index: " + index)
        })
    });
    it.only('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/') 
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text() == "Curls to straight Shampoo") {
                cy.wrap($el).click()
            }
        })
    });
});