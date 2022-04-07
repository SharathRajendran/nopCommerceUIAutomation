/// <reference types = 'cypress' />


describe('Handling HTML Table Elements', function(){

    // beforeEach(function(){
    //     cy.visit('https://testautomationpractice.blogspot.com/')
        
    // })

    it('Finding if the table contains the specified element', function(){

     
        cy.visit('https://testautomationpractice.blogspot.com/')
        
cy.contains('a','Blogger').should('have.attr','target')

cy.contains('a','Blogger').invoke('removeAttr','target').click()

let currentURL = cy.url()

cy.log(currentURL)


    })

   

       
})