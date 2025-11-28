class Settings {
  Adminlist() {
      cy.get("button[aria-label='Settings'] svg")
    //cy.get('.css-1nirtat[aria-label="Settings"]')
      .click({ force: true })
      .wait(2000);

    //cy.get('.css-j7qwjs').should('be.visible');

    // Get all rows in the table body
    cy.get('.css-j7qwjs').each(($row, index) => {
    });
    // Get log of all admin
    cy.get('.css-nf6qyy').each(($el, index) => {
      cy.log(`Element at index ${index} has text: ${$el.text()}`);
    });
  }

  Addadmin() {
    cy.get('.css-1q4coef').then(($body) => {
      // Check if the admin already exists
      if ($body.text().includes("cypress01@test.com")) {
        cy.log('Admin already exists — skipping creation and EDIt');
    //edit admin
    const adminName = 'cypresstest01';
    cy.contains('.css-1kgmfyp',"cypresstest01")
      .within(() => {
    //click on edit icon
    cy.get('button.css-1mspm8i[aria-label="Edit"]')
    //.eq(1)
    .click();
      });
    //enter into text box
    cy.get('.css-16hwqz7').eq(0)
      .click().clear()
      .type('cypresstest2');
    cy.get('.css-1dv25nx').eq(2)
      .click().type('{selectall}{backspace}')
      .trigger('input')
      .type('9876543210');
    cy.get('button.css-1bwop7q').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contain("Admin Details Updated Successfully");
      cy.log("Admin Details Updated Successfully");
    })
      } else {
        cy.log('Admin does not exist — creating now');
        //click on addadmin button
        cy.get('.css-1bx2vjo').click();
        cy.get('.css-1dv25nx').eq(0)
          .click()
          .type('cypresstest01');
        cy.get('.css-1dv25nx').eq(1)
          .click()
          .type("cypress01@test.com");
        cy.get('.css-1dv25nx').eq(2)
          .click().type('1232405076');
        cy.get('.css-clwp0l')
          .click().type("Poiu@1234");
        cy.get('.css-1bwop7q').click();
        //to validate
        cy.on('window:alert', (t) => {
          cy.log('Alert triggered')
          expect(t).to.contain("Admin Added Successfully");
          //cy.log("Admin Added Successfully");
        }
        )
      }
    })
  }
  // Editadmin() {
  //   //edit admin
  //   const adminName = 'cypresstest01';
  //   cy.contains('.MuiStack-root.css-1kgmfyp',"cypresstest01")
  //     .within(() => {
  //   //click on edit icon
  //   cy.get('button.css-1mspm8i[aria-label="Edit"]')
  //   //.eq(1)
  //   .click();
  //     });
  //   //enter into text box
  //   cy.get('.css-16hwqz7').eq(0)
  //     .click().clear()
  //     .type('cypresstest2');
  //   cy.get('.css-1dv25nx').eq(2)
  //     .click().type('{selectall}{backspace}')
  //     .type('9876543210');
  //   cy.get('button.css-1bwop7q').click();
  //   cy.on('window:alert', (t) => {
  //     expect(t).to.contain("Admin Details Updated Successfully");
  //     cy.log("Admin Details Updated Successfully");
  //   })
  // }


  Deleteadmin() {
    cy.get('button.css-1mspm8i[aria-label="Delete"]').eq(1).click();
    cy.on('window:confirm', () => false);
    cy.contains('button', 'Delete').click({ force: true });
    cy.on('window:alert', (t) => {
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
  netemailreport() {
    cy.get('.css-k008qs').eq(2).click(); //select netradyne tab
    cy.url().should("include", '/settings/email_reporting/netradyne_email');
    //cy.get('.css-se37af').click(); // change selector accordingly
    cy.get('button.css-f4s5gt').click(); //click on calendar
     cy.contains('button.MuiPickersDay-root','12')
      .should('be.visible')
      .dblclick();
     cy.wait(2000);
    // select date 
    cy.get('button.css-8sdzdk').click();      //click on send email button
    cy.log('Email sent to all admins and owners');
    cy.get('.css-1cvhzgg').should('have.text', 'Email sent to all admins and owners');
  }

  scoreemailreport() {
    cy.get('.css-k008qs').eq(2).click(); //click on email reporting tab
    cy.get('div#list1 p.css-k15km5').contains('Scorecard').click({ force: true });//click scorecard tab
    cy.get('.css-ucajj3').click();  //click on calendar
    cy.get('button.MuiPickersDay-root[aria-label="Oct 2, 2024"]')
      .should('be.visible')
      .click();   //date selected
    cy.get('.css-14ru6gp').click(); //send email button clicked
    cy.get('.css-1cvhzgg').should('have.text', 'Email sent to all admins and owners');
    cy.log('Email sent to all admins and owners');
  }



}
export default Settings;