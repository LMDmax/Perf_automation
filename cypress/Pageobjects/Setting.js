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

  Addadmin(email = 'cypress01@test.com') {
    // Ensure admin list container is present
    cy.get('.css-1q4coef', { timeout: 10000 }).then(($body) => {
      const bodyText = $body.text();
      // Check if the admin already exists (search by provided email)
      if (bodyText.includes(email)) {
        cy.log(`Admin ${email} exists — locating and clicking Edit`);
        // Find the element that contains the email, then find the nearest ancestor that has an Edit button
        cy.contains(email, { timeout: 10000 }).then(($el) => {
          // Look up through parents to find a container that contains an Edit button
          const $parents = $el.parents();
          const $parentWithEdit = $parents.filter(function () {
            return Cypress.$(this).find('[aria-label="Edit"]').length > 0;
          });
          if ($parentWithEdit.length) {
            // Click the first Edit button found within that container
            cy.wrap($parentWithEdit.first()).within(() => {
              cy.get('[aria-label="Edit"]', { timeout: 10000 }).first().click({ force: true });
            });
          } else {
            // Fallback: try to click an Edit button that is a sibling of the email element
            cy.wrap($el).parent().within(() => {
              cy.get('[aria-label="Edit"]', { timeout: 10000 }).first().click({ force: true });
            });
          }
        });

        // After clicking edit, update fields (example values — keep behavior unchanged)
        cy.get('.css-16hwqz7').eq(0).click().clear().type('cypresstest2');
        cy.get('.css-1dv25nx').eq(2).click().type('{selectall}{backspace}').trigger('input').type('9876543210');
        cy.get('button.css-1bwop7q').click();
        cy.on('window:alert', (t) => {
          expect(t).to.contain('Admin Details Updated Successfully');
          cy.log('Admin Details Updated Successfully');
        });
      } else {
        cy.log(`Admin ${email} does not exist — creating now`);
        // click on addadmin button
        cy.get('.css-1bx2vjo', { timeout: 10000 }).click();
        cy.get('.css-1dv25nx').eq(0).click().type('cypresstest01');
        cy.get('.css-1dv25nx').eq(1).click().type(email);
        cy.get('.css-1dv25nx').eq(2).click().type('1232405076');
        cy.get('.css-clwp0l').click().type('Poiu@1234');
        cy.get('.css-1bwop7q').click();
        // to validate
        cy.on('window:alert', (t) => {
          cy.log('Alert triggered');
          expect(t).to.contain('Admin Added Successfully');
        });
      }
    });
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


  Deleteadmin(email = 'cypress01@test.com') {
    // Ensure admin list container is present
    cy.get('.css-1q4coef', { timeout: 10000 }).then(($body) => {
      const bodyText = $body.text();
      if (!bodyText.includes(email)) {
        cy.log(`Admin ${email} not found — skipping delete`);
        return;
      }

      cy.log(`Admin ${email} found — locating Delete button`);

      // Set up native confirm handler to accept deletion dialogs
      cy.on('window:confirm', () => true);

      // Locate the email element, find nearest ancestor containing a Delete button, and click it
      cy.contains(email, { timeout: 10000 }).then(($el) => {
        const $parents = $el.parents();
        const $parentWithDelete = $parents.filter(function () {
          return Cypress.$(this).find('[aria-label="Delete"]').length > 0;
        });

        if ($parentWithDelete.length) {
          cy.wrap($parentWithDelete.first()).within(() => {
            cy.get('[aria-label="Delete"]', { timeout: 10000 }).first().click({ force: true });
          });
        } else {
          // fallback: try sibling/parent
          cy.wrap($el).parent().within(() => {
            cy.get('[aria-label="Delete"]', { timeout: 10000 }).first().click({ force: true });
          });
        }

        // Some apps show a confirmation modal — click Delete in modal if present
        cy.contains('button', /^Delete$/i, { timeout: 10000 }).then(($btn) => {
          if ($btn && $btn.length) {
            cy.wrap($btn).click({ force: true });
          }
        });
        // Validate deletion alert if shown
        cy.on('window:alert', (t) => {
          expect(t).to.contain('Admin Deleted');
          cy.log('Admin Deleted');
        });
      });
    });
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
     // Wait for dates to load
// Select end date
    cy.get('button.MuiPickersDay-root:not([disabled])')
    .contains(/^6$/)
    .click({ force: true });
    //Select end date
    cy.get('button.MuiPickersDay-root:not([disabled])')
    .contains(/^6$/)
    .click({ force: true });
    //cy.get('.css-4mb1j7').click({multiple: true}); //click outside to close calendar
    cy.get('body').click(0, 0);
    cy.wait(300);
    cy.get('button.css-8sdzdk').click({force:true});      //click on send email button
    // ---- Click Send in Popup ----
   // Click the Send button in the modal
    cy.get('button.css-8sdzdk')
    .last()
    .click({ force: true });
    //cy.wait(2000);
    // Verify success message appears
    cy.contains('Email sent to all recipients')
    .should('be.visible');
   
    cy.log('Email sent to all admins and owners');
  }

  scoreemailreport() {
    //cy.get('.css-1pqjxd').eq(2).click(); //click on email reporting tab
    cy.get('.css-c686q').contains('Scorecard').click({ force: true });//click scorecard tab
    cy.contains('span', 'Scorecard')
      .click({ force: true });
    cy.get('.css-ucajj3').click();  //click on calendar
    cy.get('button.MuiPickersDay-root[aria-label="Oct 2, 2024"]')
      .should('be.visible')
      .click();   //date selected
    cy.get('.css-14ru6gp').click(); //send email button clicked
    cy.get('.css-1cvhzgg').should('have.text', 'Email sent to all admins and owners');
    cy.log('Email sent to all admins and owners');
  }

  // Example method you can paste into the Pageobject or a support command
  selectDateFromCalendar(dateString) {
    // dateString e.g. '2024-10-02' or new Date(...)
    const d = new Date(dateString);
    const targetLabel = d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); // "Oct 2, 2024"
    const targetMonthYear = d.toLocaleString('en-US', { month: 'long', year: 'numeric' }); // "October 2024"

    // 1) open the calendar (adjust selector to your calendar-open button)
    cy.get('.css-ucajj3', { timeout: 10000 }).click();

    // 2) ensure calendar shows target month/year by clicking Next until found
    function ensureMonth() {
      return cy.get('.MuiPickersCalendarHeader-switchHeader', { timeout: 10000 })
        .invoke('text')
        .then((text) => {
          if (text.includes(targetMonthYear)) {
            return;
          }
          // click next month (adjust aria-label/class if different)
          cy.get('button[aria-label="Next month"]').click();
          // short wait for UI animation
          cy.wait(200);
          return ensureMonth();
        });
    }

    ensureMonth().then(() => {
      // 3) click the date by aria-label (preferred) with fallback to day-number
      cy.get(`button.MuiPickersDay-root[aria-label="${targetLabel}"]`, { timeout: 10000 })
        .click({ force: true })
        .then(null, () => {
          // fallback if aria-label not present: click by visible day number
          const day = d.getDate();
          cy.get('button.MuiPickersDay-root:not([disabled])')
            .contains(new RegExp(`^${day}$`))
            .click({ force: true });
        });
    });
  }
}
export default Settings;