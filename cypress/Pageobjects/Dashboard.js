class dashboard
{
    Dailyhigh()
    {
        
        cy.log("https://staging.performance.lmdmax.com/dashboard/performance");//netradyne tab selected
        cy.log('Netradyne tab');
        cy.get('.css-qkelm5')  //pie chart value printed
        .then(($el) => {
            cy.log(`Netradyne table: ${$el.text()}`)
        
        cy.get('table.css-nrqm6m>tbody>tr')   //netradyne table  value printed for 30 days
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td')
                        .each(($col, index, $cols)=>{
                            cy.log($col.text());
                         });
                
                });
            });
        });
            cy.contains("li", "Report").find(".MuiListItemButton-root").click();    
            cy.get(".css-8atqhb")
            .eq(2)      
            .within(() => {      
                cy.get(".css-1ivqeuh").contains("li", "Quality Report").click();    
                      });    
            cy.get('td')      
            .eq(0)      
            .invoke("text")      
            .then((text) => {  
                //cy.log(text);  
                const selectedDate = text.trim();        
                cy.log(`Selected Date: ${selectedDate}`);        
                const formattedDate = selectedDate.replace(/ 0(\d)/, " $1");        
                cy.log(`Formatted Date: ${formattedDate}`);        
                cy.contains("li", "Dashboard").find(".MuiListItemButton-root").click();        
                cy.contains("button", "Daily").click();        
                //cy.get('button[aria-label="Previous month"]').click();        
            
            cy.get(`button[aria-label="${formattedDate}"]`).click()
            //cy.wait(5000);
        });

            cy.contains("h6", "Quality Report").click();
            cy.log("Quality Report");
            //cy.get("h6", "Quality Report")
            cy.get('.css-1l1iz8p')  //pie chart value printed
                .then(($el) => {
            cy.log(`Quality report: ${$el.text()}`)
             //.then(($rows) => {
            //if($rows.length > 0) // compare data on selected date
            {
                cy.get('table.css-nrqm6m>tbody>tr')   //quality report table  value printed for 30 days
                 .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                     cy.get('td')
                  .each(($col, index, $cols)=>{
                      cy.log($col.text());
                        });
                    });
                });
             }
                 /*else  {
                cy.get('.css-144bnfp >.MuiBox-root >.MuiTypography-subtitle1') //else print no data found
                .should('exist')
                .then(($el) => {
                    cy.log(`Quality Report: ${$el.text()}`);
                });
            }*/
            }); 
        //});
    }
}        
    
export default dashboard;