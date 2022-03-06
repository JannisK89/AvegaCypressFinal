describe('My first Cypresss test suite', () => { 

    before(() => {
        cy.visit('/')
    })

    it('Finds a user and creates a new plan', () => {
        cy.searchById(1);
        cy.verifyUser('1','Sallie', 'Holloway', '3589 Goldleaf Lane, New Jersey')
        cy.createNewPlan()
    })
 })