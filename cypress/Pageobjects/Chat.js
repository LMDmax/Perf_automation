class chat
{
    chattwillio()
    {
        //cy.get('.MuiDrawer-paperAnchorDockedLeft css-1y674dv').click();
        cy.get('.css-1ontqvh').contains('li','Chat').click();
        cy.get('.css-1tggkk2').click();
        cy.log("chat opened");
    }

    chatpayroll()
    {

    }
    chatInapp()
    {

    }
}
export default chat;