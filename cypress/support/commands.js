import createTestData from './utils/testdata'

Cypress.Commands.add('searchById', (id) => {
    cy.get('#search').type(id);
    cy.contains('button', 'Fetch User Information').click();
}) 

Cypress.Commands.add('verifyUser', (id, firstName, lastName, address) => {
    cy.contains('div', `ID${id}`);
    cy.contains('div', `First Name${firstName}`);
    cy.contains('div', `Last Name${lastName}`);
    cy.contains('div', `Address${address}`);
})

Cypress.Commands.add('createNewPlan', () => {
    const testData = createTestData()
    cy.contains('button', 'Create New Plan').click();
    cy.get('form').get('textarea').each((elem, index) => {
        cy.wrap(elem).type(testData[index])
    });

    cy.contains('button', 'Create New Plan').click();
    cy.contains('li', `Users Wishes${testData[0]}`)
    cy.contains('li', `Job Market${testData[1]}`)
    cy.contains('li', `Our Assessment${testData[2]}`)

})