/// <reference types = 'cypress' />

describe('alerts function', function(){

    it('verify text in alert', function(){
cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')

cy.get('[type=submit]').click()

cy.on('window:alert',(str =>

    expect(str).to.equal('Please enter a valid user name')
)
)

})


it('verify text in alert case 2', function(){
    
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[onclick="myFunction()"]').click()

    cy.on('window:confirm',(str =>
    
        expect(str).to.equal('Press a button!')    
    ))
    
    })

}
)



