/// <reference types= 'Cypress'/>
class MyTheresaLogin {
    clickOnUserSign() {
        cy.get('.icon__user').click({ force: true });
    }

    enterEmail(email){
        cy.get('.signinform__content > .form__element--email > .forminput > .forminput__content > .forminput__content__box > input')
            .type(email);
    }

    enterPwd(password){
        cy.get('.signinform__content > .form__element--password > .forminput > .forminput__content > .forminput__content__box > input')
            .type(password);
    }

    clikcOnSubmitBtn(){
        cy.get('.signinform__submit > .button').click();
    }

    verifyLogin(firstName){
        cy.url().should('include','/account');
        cy.get('.overview__title', { timeout: 15000 }).should('have.text', 'Welcome '+firstName)

    }

    verifyUnsuccessfulLogin(msg){
        cy.contains(msg).should('be.visible');
    }    
}
export default MyTheresaLogin;