/// <reference types = 'cypress' />

describe('UI elements test 2', function(){

    it('Check box exercise', function(){

cy.visit('http://demo.automationtesting.in/Register.html')

cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

cy.get('#checkbox1').uncheck().should('not.be.checked')
cy.get('#checkbox2').uncheck().should('not.be.checked')

cy.get('[type="checkbox"]').check(['Cricket','Hockey'])

})

it('select drop down tests', function(){

    cy.get('#Skills').select('Android').should('have.value','Android')

})

it('Multi select drop down tests', function(){

    cy.get('#msdd').click()

    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Danish').click()
})

it('Enter text and select drop down tests', function(){

    
    cy.get('.select2-selection.select2-selection--single').click({force:true}) //force is used to forcefully click on an element when some ele is overlapping or hiding it

    cy.get('.select2-search__field').type('ind')

    cy.get('.select2-search__field').type('{enter}')
})

})