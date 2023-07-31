import MyTheresaApp from "./pageObjects/MyTheresaApp";
const mytheresaApp = new MyTheresaApp();

describe('Verify there are no JavaScript errors when you visit Mytheresa & no broken links', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.setCookie('mt_csf', '15340000');
    cy.visit(Cypress.env('prodUrl'), { failOnStatusCode: false, setTimeout: 10000 });
    cy.wait(20000);
    mytheresaApp.acceptPrivacyPopup();
  })


  it('Verify there are no JavaScript errors when you visit the website', () => {
    // cy.clearCookies();
    // cy.visit("https://www.mytheresa.com/de/en/men", { failOnStatusCode: false });
    // cy.wait(20000);
    // mytheresaApp.acceptPrivacyPopup();
    mytheresaApp.checkJsError();
    // cy.window().then((win) => {
    //   cy.spy(win.console, 'error').as('consoleError');
    // });
    // cy.get('@consoleError').should('not.be.called');
  })

  it('Verify there no broken links', () => {
    // cy.clearCookies();
    // cy.visit("https://www.mytheresa.com/de/en/men", { failOnStatusCode: false });
    // cy.wait(20000);
    // mytheresaApp.acceptPrivacyPopup();

    // mytheresaApp.checkForLinkStatus();
    expect(mytheresaApp.checkForLinkStatus()).to.be.true;
    // cy.get('a').each((link) => {
    //   const href = link.prop('href');
    //   // Skip links with empty or non-http(s) protocols (e.g., mailto, tel)
    //   if (!href || !href.startsWith('http')) {
    //     return;
    //   }

    //   cy.request({
    //     url: href,
    //     failOnStatusCode: false,
    //   }).then((response) => {
    //     expect(response.status).to.not.be.oneOf([400, 404, 500]); // Check for status codes of broken links
    //   });
    // });
  })
})