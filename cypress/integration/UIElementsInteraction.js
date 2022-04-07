/// <reference types = "cypress" />

describe('UI Elements Interactions Test', function(){

    it('To verify flow in mercury travels', function(){

        cy.visit('https://demo.guru99.com/test/newtours/')

        cy.url().should('include','newtours') //cy.get is used to get the current url and should and include are used to verofy the contents in the url

        cy.get('[name="userName"]').should('be.visible').should('be.enabled').type('mercury')

        cy.get('[name="password"]').should('be.visible').should('be.enabled').type('mercury')

        cy.get('[type="submit"]').should('be.visible').should('be.enabled').click()

      //  cy.title().should('.contain','flight')

       // cy.get('html body div table tbody tr td table tbody tr td table tbody tr td table tbody tr td h3').should('eq','Login Successfully')

        cy.get('h3').should('be.visible').contains('Login Successfully')
        
        //.should('eq','Login Successfully')

        cy.get('tr.mouseOut:nth-child(2) > td:nth-child(2) > a:nth-child(1)').should('be.visible').click()

        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')

        cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()

        cy.get('input[type="image"]').should('be.visible').click()

        cy.title().should('eq','Find a Flight: Mercury Tours:')



    })

})