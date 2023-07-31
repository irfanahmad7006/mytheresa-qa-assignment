import MyTheresaApp from "./pageObjects/MyTheresaApp";
import MyTheresaLogin from "./pageObjects/MyTheresaLogin";
const mytheresaApp = new MyTheresaApp
const mytheresaLoginPage = new MyTheresaLogin();


describe('template spec', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.setCookie('mt_csf', '15340000');
        cy.visit(Cypress.env('prodUrl'), { failOnStatusCode: false, setTimeout: 10000 });
        cy.wait(20000);
        mytheresaApp.acceptPrivacyPopup();
    })



    it('Verify Successful login', () => {

        // cy.clearCookies();
        // cy.setCookie('mt_csf', '15340000');
        // cy.visit("https://www.mytheresa.com/de/en/men", { failOnStatusCode: false, setTimeout: 10000 });
        // cy.wait(20000);

        // cy.get('.icon__burger').should('be.visible').click();
        // cy.get('.scroll .button .button__text').first().click();

        // mytheresaLoginPage.clickOnUserSign();


        // cy.get('.signinform__content > .form__element--email > .forminput > .forminput__content > .forminput__content__box > input')
        //     .type("irfan.ahmad@maildrop.cc");


        cy.fixture('userData').then((td) => {
            if (td) {
                mytheresaLoginPage.clickOnUserSign();
                cy.log(td.correctEmail);
                mytheresaLoginPage.enterEmail(td.correctEmail);
                mytheresaLoginPage.enterPwd(td.correctPassword, {log:false});
                mytheresaLoginPage.clikcOnSubmitBtn();
                mytheresaLoginPage.verifyLogin(td.correctFristName);
            } else {
                throw new Error('Member not found: ' + td);
            }
        })
        // mytheresaLoginPage.enterEmail('irfan.ahmad@maildrop.cc');


        // cy.get('.signinform__content > .form__element--password > .forminput > .forminput__content > .forminput__content__box > input')
        //     .type("Mytheresa@123");

        // mytheresaLoginPage.enterPwd('Mytheresa@123');

        // cy.get('.signinform__submit > .button').click();
        // mytheresaLoginPage.clikcOnSubmitBtn();

        // cy.get('.overview__title', { timeout: 15000 }).should('have.text', 'Welcome Irfan')
        
                // mytheresaLoginPage.verifyLogin(td.correctFristName);
        // mytheresaLoginPage.verifyLogin('Irfan');
    })

    it('Verify Un-Successful login with wrong credentials', () => {
        // cy.clearCookies();
        // cy.setCookie('mt_csf', '15340000');
        // cy.visit("https://www.mytheresa.com/de/en/men", { failOnStatusCode: false, setTimeout: 10000 });
        // cy.wait(20000);
        // cy.get('.icon__burger').should('be.visible').click();
        // cy.get('.scroll .button .button__text').first().click();
        // mytheresaLoginPage.clickOnUserSign();


        // cy.get('.signinform__content > .form__element--email > .forminput > .forminput__content > .forminput__content__box > input')
        //     .type("irfan.ahmad@maildrop.cc");

        cy.fixture('userData').then((td) => {
            if (td) {
                cy.log(td.inCorrectEmail);
                cy.log(td.inCorrectPassword);
                cy.log(td.loginErrMsg);
                mytheresaLoginPage.clickOnUserSign();
                mytheresaLoginPage.enterEmail(td.inCorrectEmail);
                mytheresaLoginPage.enterPwd(td.inCorrectPassword ,{log:false});
                mytheresaLoginPage.clikcOnSubmitBtn();
                mytheresaLoginPage.verifyUnsuccessfulLogin(td.loginErrMsg);

            } else {
                throw new Error('Member not found: ' + td);
            }
        })




        // mytheresaLoginPage.enterEmail('irfan.ahmad@maildrop.cc');
        // cy.get('.signinform__content > .form__element--password > .forminput > .forminput__content > .forminput__content__box > input')
        //     .type("Mytheresa@1235");

        // mytheresaLoginPage.enterPwd('Mytheresa@1235');
        // cy.get('.signinform__submit > .button').click();
        // mytheresaLoginPage.clikcOnSubmitBtn();
        // cy.contains('The credentials you have inserted are not correct').should('be.visible')
        // mytheresaLoginPage.verifyUnsuccessfulLogin('The credentials you have inserted are not correct');

    })
})