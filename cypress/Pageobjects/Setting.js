class Settings
{
    Adminlist()
    {
        cy.xpath("//button[@id='settings']")
        .click({force : true})
        .should('be.visible');

        //cy.get('.css-j7qwjs').should('be.visible');

    // Get all rows in the table body
        cy.get('.css-j7qwjs').each(($row, index) => {
    });
       // Get log of all admin
        cy.get('.css-1xhj18k').each(($el, index) => {
            cy.log(`Element at index ${index} has text: ${$el.text()}`);
          });
    }

    Addadmin()
    {
      //click on addadmin button
      cy.get('button.css-ztob9j').click();
      cy.get('.css-ix5wam').eq(0)
      .click()
      .type('cypresstest01');
      cy.get('.css-ix5wam').eq(1)
      .click()
      .type("cypress01@test.com");
      cy.get('.css-ix5wam').eq(2)
      .click().type('1232405076');
      cy.get('.css-ix5wam').eq(3)
      .click().type("Abcd@1234");
      cy.get('.css-1o10yzq').click();
      //to validate
      cy.on('window:alert',(t)=>{
        cy.log('Alert triggered')
        expect(t).to.contain("Admin Added Successfully");
        //cy.log("Admin Added Successfully");
      })
    }
      Editadmin()
      {
        //edit admin
        //click on edit icon
        cy.get('button.css-10ygcul[aria-label="Edit"]').eq(1).click();
        //enter into text box
        cy.get('.css-1jaylw8').eq(0)
      .click().clear()
      .type('cypresstest2');
      cy.get('.css-1woikfr').eq(2)
      .click()
      .clear().type('1232499076');
      
      cy.get('button.css-vajox6').click();
      cy.on('window:alert',(t)=>{
        expect(t).to.contain("Admin Details Updated Successfully");
        //cy.log("Admin Details Updated Successfully");
      })
      }

      Deleteadmin()
      {
        cy.get('button.css-10ygcul[aria-label="Delete"]').eq(1).click();
        cy.on('window:confirm',()=>false);
        cy.contains('button','Delete').click({force:true});
        cy.on('window:alert',(t)=>{
          expect(t).to.contain("Admin Deleted");
          //cy.log("Admin Added Successfully");
        })
      }
    
     /* Setthreshold()
      {
        cy.get('.css-1p4l1jm').eq(1).click();

        // Get all rows in the table body
        cy.get('.css-18gxvas').each(($row, index) => {
        });
           // Get log of all admin
            cy.get('.css-18gxvas').each(($el, index) => {
                cy.log(`Element at index ${index} has text: ${$el.text()}`);
              });
      }*/

        //email reporting
        netemailreport()
        {
          cy.get('.css-k008qs').eq(2).click(); //select netradyne tab
          cy.url().should("include",'/settings/email_reporting/netradyne_email');
          cy.get('.css-se37af').click(); // change selector accordingly
          cy.get(`.css-q320sm:contains(${13})`).click();// select date 
          cy.get('.css-14ru6gp').click();
          cy.get('.css-1cvhzgg').should('have.text','Email sent to all admins and owners');
        }

        scoreemailreport()
        { 
          cy.get('.css-k008qs').eq(2).click(); //click on email reporting tab
          cy.get('div#list1 p.css-k15km5').contains('Scorecard').click({ force: true });//click scorecard tab
          cy.get('.css-ucajj3').click();  //click on calendar
          cy.get('button.MuiPickersDay-root[aria-label="Oct 2, 2024"]')          
          .should('be.visible')          
          .click();   //date selected
          cy.get('.css-14ru6gp').click(); //send email button clicked
          cy.get('.css-1cvhzgg').should('have.text','Email sent to all admins and owners');
          cy.log('Email sent to all admins and owners');
        }


}

export default Settings;