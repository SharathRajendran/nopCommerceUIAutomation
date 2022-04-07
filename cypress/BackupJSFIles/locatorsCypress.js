/// <reference types = "cypress" />

describe("First E2E program", function(){

    it('Verify unit price after adding it to cart', function(){

        cy.visit('https://demo.nopcommerce.com/')

        cy.get('.search-box-text.ui-autocomplete-input[id="small-searchterms"]').type("Apple MacBook Pro 13-inch")

        cy.get('[type="submit"]').click()

        cy.get('.button-2.product-box-add-to-cart-button[type="button"]').click()

        cy.get('#product_enteredQuantity_4').clear().type('2')

        cy.get('.add-to-cart-button[id="add-to-cart-button-4"]').click()

        cy.wait(5000)

        cy.get('#topcartlink > a > span.cart-label').click()

        cy.wait(3000)

        cy.get('.product-unit-price').contains('$1,800.00')






    }

)



}
  
)