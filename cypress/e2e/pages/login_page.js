export class LoginPage{

loginPage_username='#userName'
loginPage_password='#password'

    navigateURL(url){
        cy.visit(url)
    }

    enterUsername(username){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }

}