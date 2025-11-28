class Profile
{
    prof()
    {
         cy.xpath("//button[@id='profile']")   //click on profile icon
           .click({force : true})
           .should('be.visible');
        cy.log('https://staging.performance.lmdmax.com/profile'); // profile page opened
        // Wait for page load
            cy.wait(2000);
            cy.get('.css-1z13r6o').click();
        // Log the content of user details section
             //click on user details tab
            cy.get('.css-wx2p24').contains('User Details')
            .then(($el) => {
            cy.log($el.text()+'   ');
        });

        // Log the content of the company details section
            cy.get('.css-5yicxn').then(($el) => {
            cy.log($el.text(),' \n  ');

        // //Log profile picture
            //print image url
             cy.get('img.css-45do71')
             //.should('be.visible')
             .invoke('attr','src')
             .then((src)=>{
                cy.log(`profile picture URL:${src}`);
                console.log(`profile picture URL:${src}`);
             })
        });
    }
    TOSprof()
    {
         cy.get('.css-45do71')
         .click({multiple:true});
         cy.url().should('be.have','https://lmdmax.com/termsandcondition/');
    }
    pripol()
    {
        cy.get('.css-1umhu2m')
        .click({multiple:true});
        cy.url().should('be.have','https://lmdmax.com/privacypolicy/');   
    }
    

}
export default Profile;