import MyTheresaApp from "./pageObjects/MyTheresaApp";
import MyTheresaLogin from "./pageObjects/MyTheresaLogin";
const mytheresaApp = new MyTheresaApp
const mytheresaLoginPage = new MyTheresaLogin();


describe('template spec', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.setCookie('mt_csf', '15340000');
        cy.visit(Cypress.env('prodUrl'), { failOnStatusCode: false, setTimeout: 10000 });
        mytheresaApp.acceptPrivacyPopup();
    })



    it('Verify Successful login', () => {
        cy.fixture('userData').then((td) => {
            if (td) {
                mytheresaLoginPage.clickOnUserSign();
                cy.log(td.correctEmail);
                mytheresaLoginPage.enterEmail(td.correctEmail);
                mytheresaLoginPage.enterPwd(td.correctPassword, { log: false });
                mytheresaLoginPage.clikcOnSubmitBtn();
                mytheresaLoginPage.verifyLogin(td.correctFristName);
            } else {
                throw new Error('Member not found: ' + td);
            }
        })
    })

    it('Verify Un-Successful login with wrong credentials', () => {
        cy.fixture('userData').then((td) => {
            if (td) {
                cy.log(td.inCorrectEmail);
                cy.log(td.inCorrectPassword);
                cy.log(td.loginErrMsg);
                mytheresaLoginPage.clickOnUserSign();
                mytheresaLoginPage.enterEmail(td.inCorrectEmail);
                mytheresaLoginPage.enterPwd(td.inCorrectPassword, { log: false });
                mytheresaLoginPage.clikcOnSubmitBtn();
                mytheresaLoginPage.verifyUnsuccessfulLogin(td.loginErrMsg);
            } else {
                throw new Error('Member not found: ' + td);
            }
        })
    })
})