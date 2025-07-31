import { expect } from "chai";

class Workflow
{ 
    Newreport(reports)
    {
    // Locate the file input element and attach the file
    cy.get('button[id="workflow"]').click();
    cy.url().should("include", "/workflow/daily/all_alert_report");
    cy.contains("li", "Scorecard Report").click();
    cy.url().should("include", "/workflow/weekly/scorecard_report");
    cy.get('[data-testid="ArrowLeftIcon"]').click();
    // Assert the attribute of the selected week
    //.then(()=>{
    
    cy.fixture("US_PAYA_DYY6_Week40_2024_en_DSPScorecard.pdf", "base64").then((fileContent) => {
    const fileName= "US_PAYA_DYY6_Week40_2024_en_DSPScorecard.pdf",
    mimeType ="application/pdf";

    cy.contains("label", "Choose File").selectFile({
      contents: Cypress.Buffer.from(fileContent, "base64"),
      fileName,
      mimeType,
  });
});
    
    cy.contains('button','Upload File').click();
    //accept all confirm
     cy.on('window:confirm',()=>false);
    cy.contains('button','Yes').click({force:true});
  

    // Verify the file upload success
    cy.on('window:alert',(alertText) =>{
      expect(alertText).to.contains('File Uploaded Successfully');
    })
     //click on next button    
     cy.contains('button','Next').click();
     cy.visit('https://staging.performance.lmdmax.com/workflow/weekly/scorecard');
     cy.contains('Current Scorecard Report').should('be.visible');
     //click send message button
     cy.get(".css-cqwhpz").click();
     cy.contains('Drivers Selected').should('be.visible');
     //click on view sample image
     cy.contains('p', 'View sample image').should('be.visible').click();
     cy.contains('Sample image').should('be.visible');
     cy.get('.css-q5fqw0').within(() => {
      cy.contains('Sample image').should('be.visible')
      cy.get(".css-1y1t7b2").click();
      //cy.contains('CloseIcon').should('be.visible');
     })
     //to click remove all button
     cy.get(".css-c15c7g").click();
     //to find and click 1st check box
    cy.get('#current_scorecard')
  .find('input[type="checkbox"]').first().check().should('be.checked');
      cy.get(".css-cqwhpz").click();
    //accept all confirm
    cy.get(".css-tw7oo5").click();
    cy.on('window:confirm',()=>{
        expect().to.contains('Message sent successfully');

    })
    //moved to chat aftre bulk message
    cy.url().should('eq','https://staging.performance.lmdmax.com/chat');
    cy.wait(5000);
    //click on first chat
    //cy.get('.css-3fvckm', css-17gwzrl)
    cy.get('.css-3fvckm').first().click();
    cy.log('clicked on first driver from chat list');
    
    //open latest sent image
    cy.get('.css-1hy9t21').last().click();
    cy.log('sent image open');
    //close image
    cy.get('.css-675ts4').first().click();
    cy.log('image closed');
  }
  
  }

    export default Workflow;