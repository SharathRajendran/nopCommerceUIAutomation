///<reference types = 'cypress' />
class adminNOPLoginPage{


    visitPage(){

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    }

    clearAndEnterUserName(userName){

        //cy.get('#Email').clear().type(userName)
        const userNameElement = cy.get('#Email')
        userNameElement.clear()
        userNameElement.type(userName)

        return this

    }

    clearAndEnterPassword(password){

        //cy.get('#Email').clear().type(userName)
        const passwordElement = cy.get('#Password')
        passwordElement.clear()
        passwordElement.type(password)

        return this

    }

    clickLoginButton(){

        const loginBTN = cy.get('.button-1.login-button')
        loginBTN.click()
    }

}

export default adminNOPLoginPage