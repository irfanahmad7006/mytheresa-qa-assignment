/// <reference types= 'Cypress'/>
class MyTheresaApp {
  acceptPrivacyPopup() {
    //will updated at the end if time permits.
    cy.log('will updated at the end if time permits.');
    // cy.get('#privacy-iframe', {includeShadowDom:true})
    // cy.document().then((doc)=>{
    //   cy.log(doc.querySelectorAll('.tc-modal-open').length);
    //   doc.querySelectorAll('.tc-modal-open')[0].lastChild

      
    //   console.log(doc.querySelectorAll('#privacy-iframe'));
    // })
  }



  checkJsError() {
    cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });
    cy.get('@consoleError').should('not.be.called');
  }

  checkForLinkStatus() {
    let flag = true;
    cy.get('a').each((link) => {
      const href = link.prop('href');
      if (!href || !href.startsWith('http')) {
        return;
      }

      cy.request({
        url: href,
        failOnStatusCode: false,
      }).then((response) => {
        const stsCode = response.status;
        if(stsCode >= 200 && stsCode <400){
          cy.log(`${href} got the status code: ${stsCode}`)
        } else {
          cy.log(`${href} got the status code: ${stsCode}`)
          flag = false;
        }
        // expect(response.status).to.not.be.oneOf([400, 404, 500]); // Check for status codes of broken links
      });
    });
    if(!flag){
      return false;
    }else{
      return true;
    }
  }


}

export default MyTheresaApp;