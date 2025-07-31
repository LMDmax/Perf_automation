import Login from "../../Pageobjects/Loginpage.JS";
import dailyrepo from "../../Pageobjects/Daily report.js";
import Settings from "../../Pageobjects/Setting.js";
import Profile from "../../Pageobjects/Profile.js";
import dashboard from "../../Pageobjects/Dashboard.js";
import driver from "../../Pageobjects/Driver.js"; 
import Chat from "../../Pageobjects/Chat.js";
import acknowledgment from "../../Pageobjects/acknowledgement.js";

import { it } from "mocha";
describe('Login page', () => {
  before(() => {
    Cypress.config('defaultCommandTimeout', 10000);
  }); 

it('LoginTest', () => {
  cy.visit('https://staging.performance.lmdmax.com')

  //first create object of class
  const ln=new Login();
  ln.setUserName('allchat575@gmail.com');
  ln.setPassword('Abcd@1234');
  ln.Clickbutton();

 cy.get('input[type="checkbox"].PrivateSwitchBase-input').click();

    //const dash = new dashboard()
      //dash.Dailyhigh();

      const dr=new driver()
      dr.driverdash();

    //const ch=new Chat()
    //ch.chattwillio();

      const ack=new acknowledgment()
       ack.getacknowledgment();
       ack.addacknowledgment();
  })

})