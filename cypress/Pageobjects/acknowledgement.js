import { should } from "chai";

class Acknowledgment{

    getacknowledgment(){
        cy.xpath("//p[contains(text(), 'Acknowledgement Report')]").click();     //ack page opened
        cy.log("Acknowledgment page opened");
        
    }

    addacknowledgment(){
        cy.get('button.css-hk7rng').click();                                            //add report button click
        cy.log("Acknowledgement Form"),should('be.visible');                            
        cy.get('.css-8lmp33').type('test acknowledgement cypress');                     //add title
        cy.get('.ql-editor').type('ikkiddi, tryrtydikkidieyueyh').type('{ctrl}b');      //add description
        //cy.get('.css-a3focx')
        cy.get('input[type="file"]').selectFile('cypress/images/image.jpeg', { force: true });  //select image
        //cy.get('.css-a3focx').should('contain', 'image.jpeg'); // Assert upload success
        //cy.get('.image-preview').should('be.visible');
        cy.get('.css-xhlsi').click();                                                           //click on next button
        cy.get('.css-1ajtsyl').type('message').click();                                //add message        
        cy.get('.css-vw6zhv > .MuiStack-root > .MuiButtonBase-root').click();  //click on template icon
        cy.get('.css-xhlsi').first().click();         //select template
        cy.get('.css-64j4oi').should('be.visible');
        cy.get('.css-syrznk ',{ timeout: 15000 }).click();              // click on send button
        cy.log("Acknowledgement Report Created and Sent to Driver");
    }

    /*getacknoledgmentButton(){
        return cy.get('.button')
    }*/
}
export default Acknowledgment;