/// <reference types = 'cypress' />

import adminNOPLoginPage from '../pageObjects/adminNOPLoginPage'

describe('Using Fixture ELements', function(){

    before(function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

it('POM Test', function(){

    const lp = new adminNOPLoginPage()

    lp.visitPage()
    lp.clearAndEnterUserName(this.data.email)
    lp.clearAndEnterPassword(this.data.password)
    lp.clickLoginButton()

    cy.title().should('be.equal','Dashboard / nopCommerce administration')



})



})