class Notifications{

    BadgeNotification()
    {
        cy.get('#notify').should('be.visible');
        cy.get('span.css-4aibgo').should('be.visible')
        .then($badge => {
            const notificationCount = $badge.text();
            cy.log('Notification count:', notificationCount);
            console.log('Notification count:', notificationCount);
          });
    }




}

export default Notifications;