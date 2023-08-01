import MyTheresaApp from "./pageObjects/MyTheresaApp";
const mytheresaApp = new MyTheresaApp();

describe('Verify there are no JavaScript errors when you visit Mytheresa & no broken links', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.visit(Cypress.env('prodUrl'), { failOnStatusCode: false, setTimeout: 10000 });
    mytheresaApp.acceptPrivacyPopup();
  })


  it('Verify there are no JavaScript errors when you visit the website', () => {
    mytheresaApp.checkJsError();
  })

  it('Verify there no broken links', () => {
    expect(mytheresaApp.checkForLinkStatus()).to.be.true;
  })
})