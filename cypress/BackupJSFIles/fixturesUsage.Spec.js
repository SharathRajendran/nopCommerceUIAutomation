/// <reference types = 'cypress' />


describe('Using Fixture ELements', function(){

    before(function(){

        cy.fixture('example').then(function(data){

            this.data = data

        })

    })

    // beforeEach(function(){
    //     cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        
    // })

    // it('Finding if the table contains the specified element', function(){

        

    //     cy.get('#Email').clear().type(this.data.email)

    //     cy.get('#Password').clear().type(this.data.password)

    //     cy.get('.button-1.login-button').click()

    // })

    it('Finding if the table contains the specified element', function(){

        cy.loginCommand('admin@yourstore.com','admin')

    })

})