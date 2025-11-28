class chat
{
    chattwillio()
    {

        //click on perform twillio primary chat
        cy.get('#sidebar-drawer').trigger('mouseover');
        //cy.contains('performance').click();
        cy.get('#sidebar-drawer').contains('Performance').click({force:true});
        cy.log("clicked on twillio chat");
        //cy.get('.css-1nqhb50').click();
        cy.log("chat opened");
        //click in chat search and entered number
        // cy.get('.css-1g5o1l0', { timeout: 10000 })
        //      .type('9295331165');
        //log number entered
        //cy.log("number entered");
        //click on Driver to send messages
        cy.get('.css-1mzerio').eq(0).click();
        cy.log("driver chat opened");
       
         // Iterate through chats and print status
        cy.get('.css-u4p24i').each(($el, index) => {
        const text = $el.text();
        cy.log(`Chat ${index + 1}: ${text}`);
        });
        
    }
    chatpayroll()
    {

    }
    chatInapp()
    {

    }
}
export default chat;