class DAweeklyreport
{ 
    NewDAreport(reports)
    {
    // Locate the file input element and attach the file

    cy.get('button[id="workflow"]').click();
    cy.url().should("include", "/workflow/daily/all_alert_report");
    cy.contains("li", "DA Weekly Overview").click();
    cy.url().should("include", "/workflow/weekly/da_weekly_overview_report");
    cy.get('[data-testid="ArrowLeftIcon"]').click();
    // Assert the attribute of the selected week
    //.then(()=>{
    
    cy.fixture("DSP_Overview_Dashboard_PAYA_DYY6_2024-W40.csv", "base64").then((fileContent) => {
   //cy.get('input[type="file"]').attachFile('US
    const fileName= "DSP_Overview_Dashboard_PAYA_DYY6_2024-W40.csv",
    mimeType ="text/csv";

    cy.contains("label", "Choose File").selectFile({
      contents: Cypress.Buffer.from(fileContent, "base64"),
      fileName,
      mimeType,
  });
});
    
    cy.contains('button','Upload File').click();
    //accept all confirm
      //cy.on('window:confirm',()=>false);
      //  cy.contains('button','Yes').click({force:true});
  

    // Verify the file upload success
    cy.on('window:alert',(alertText) =>{
      expect(alertText).to.contains('DA File Uploaded Successfully');
    })
     //click on next button    
     cy.contains('button','Next').click();
     cy.visit('https://staging.performance.lmdmax.com/dashboard/performance');
     //cy.contains('DA weekly reportReport').should('be.visible');
     
  
  }
}
    export default DAweeklyreport;