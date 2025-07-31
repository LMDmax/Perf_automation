class driver
{
    driverdash()
    {
        cy.get('.css-mjzubj').contains('Driver').click();
        cy.log("Driver page");
        cy.get('.css-39vp8o').contains('button','Download').click();
        cy.log("active driver downloaded");
        cy.get('.css-11gh5l1').first().click();
        cy.log("https://staging.performance.lmdmax.com/driver/profile")
    }
    





    
}
export default driver;
