/// <reference types = 'cypress' />


describe('Handling HTML Table Elements', function(){

    beforeEach(function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        
    })

    it('Finding if the table contains the specified element', function(){

        

        cy.get('table[name="BookTable"]').contains('td','Learn Java').should('be.visible')


    })

    it('Finding element in the specified path', function(){

                cy.get('table[name="BookTable"] > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3)').contains('Javascript').should('be.visible')   
       

    })

    it('Finding adjacent table element after iterating for an element in a column', function(){

        cy.get('table[name="BookTable"] > tbody > tr td:nth-child(2)').each(($ele,index,$list) => {

            const data = $ele.text()

            if(data.includes('Animesh')){

                cy.get('table[name="BookTable"] > tbody > tr td:nth-child(1)').eq(index).then(function(bookname)
                {

                    const bname = bookname.text()

                    expect(bname).to.equal('Learn JS')

                })
              }


        })
       
    })

       
})