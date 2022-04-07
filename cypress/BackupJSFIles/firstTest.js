describe('My First Test', function()
 {
  it('Verify page title - Positive', function() { 
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
  })

  it('Verify page title - Negative', function() { 
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopcommerce demo store')
  })
})