class Profile
{
    prof()
    {//
           cy.get('button[aria-label="Profile"]').click();
      //click on profile icon in old dashboard
            //cy.contains('button', 'Go To Profile').click();   //click on profile icon in new dashboard
           //.should('be.visible');
        // Wait for page load
    
            //cy.url().should('include', '/profile');
        // Log the content of user details section
             //click on user details tab
            cy.get('.css-wx2p24') 
            .then(($el) => {
            cy.log($el.text()+'   ');    //
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
         cy.get('.css-1umhu2m').click({ multiple: true });
         cy.log('termsandcondition');
    }
    pripol()
    {
        cy.get('.css-1umhu2m')
        .click({multiple:true});
        cy.url().should('be.have','https://lmdmax.com/privacypolicy/');   
    }
    

}
export default Profile;