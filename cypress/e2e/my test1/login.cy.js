const chai = require('chai');
import Login from "../../Pageobjects/Loginpage.JS";
import Notifications from "../../Pageobjects/Notifications.js";
import dailyrepo from "../../Pageobjects/Daily report.js";
import DAweeklyreport from "../../Pageobjects/DAweeklyreport.js";
import Workflow from "../../Pageobjects/Workflow";
import Settings from "../../Pageobjects/Setting.js";
import Profile from "../../Pageobjects/Profile.js";
import driver from "../../Pageobjects/Driver.js";
import acknowledgment from "../../Pageobjects/acknowledgement.js";
import  Dashboard from "../../Pageobjects/Dashboard.js";
import Chat from "../../Pageobjects/Chat.js";

import { it } from "mocha";
describe('Login page', () => {
  before(() => {
    Cypress.config('defaultCommandTimeout', 10000);
  }); 
 

//from POM
it('LoginTest', () => {
  cy.visit('https://staging.performance.lmdmax.com')

  //first create object of class
  const ln=new Login();
  ln.setUserName('allchat575@gmail.com');
  ln.setPassword('Test@123');
  ln.Clickbutton();

  //  cy.get('input[type="checkbox"].PrivateSwitchBase-input').click();
  //  cy.log("New Dashboard page loaded");
  
  //  cy.get('input[id="search_all_driver"]')  // Select the search field
  //    .should('be.visible')                 // Ensure it is visible
  //    .click()                              // Click to focus (if necessary)
  //    .type('Aarron')                 // Type the value
  //  cy.contains('div','Aarron Williams') // Wait for the element to appear
  //    .click();
  // //cy.get('.jss21 > :nth-child(2)').click();
  //  cy.log('Typing aarron into the search field');

   const prof = new Profile();
    prof.prof();
    prof.TOSprof();
    prof.pripol();


   //notifications

  //  const notify = new Notifications();
  //  notify.BadgeNotification();

  //  const aar = new dailyrepo();
  //  aar.Allalert();

  // const DAweekly = new DAweeklyreport();
  // DAweekly.NewDAreport(reportError);

  // const wf = new Workflow();
  // wf.Newreport(reportError);

  const set = new Settings();
  set.Adminlist();
  set.Addadmin();
  //set.Editadmin();
  set.Deleteadmin();
  //set.Setthreshold();
  set.netemailreport();
  set.scoreemailreport();

  
  
  const dash = new Dashboard()
      dash.Dailyhigh();

      const dr=new driver()
      dr.driverdash();

    const ch=new Chat()
    ch.chattwillio();

      const ack=new acknowledgment()
       ack.getacknowledgment();
       ack.addacknowledgment();
  });
});

 