
class dailyrepo
{
    Allalert(){
    cy.get('button[id="workflow"]').click();
    cy.url().should("include", "/workflow/daily/all_alert_report");
    cy.get('[data-testid="ArrowLeftIcon"]').click();
    // Assert the attribute of the selected week
    //.then(()=>{
    
    cy.fixture("Alerts Report( Oct 09 2024 ).xlsx", "base64").then((fileContent) => {
   //cy.get('input[type="file"]').attachFile('US
    const fileName= "Alerts Report( Oct 09 2024 ).xlsx",
    mimeType ="text/xlsx";

    cy.contains("label", "Choose File").selectFile({
      contents: Cypress.Buffer.from(fileContent, "base64"),
      fileName,
      mimeType,
  });
});
    
    cy.contains('button','Upload File').click();
    //accept all confirm
      cy.on('window:confirm',()=>false);
      cy.contains('button','Continue Anyway ?').click({force:true});

    //accept already exist popup
        cy.on('window:confirm',()=>false);
        cy.contains('button','Yes').click({force:true});
  

    // Verify the file upload success
    cy.on('window:alert',(alertText) =>{
      expect(alertText).to.contains('File Uploaded Successfully');
    })
     //click on next button    
     cy.contains('button','Next').click();
     cy.visit('https://staging.performance.lmdmax.com/dashboard/performance');
    }
}

export default dailyrepo;