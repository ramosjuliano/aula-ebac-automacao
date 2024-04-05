/// <reference types="cypress"/>

const perfil = require ('../../fixtures/perfil.json')

describe('Funcionalidade: Detalhes da Conta', () => {
    beforeEach(() => {
       cy.visit('minha-conta/edit-account')
       cy.fixture('perfil').then(login => {
            cy.login(login.usuario,login.senha)
       })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Juliano', 'Ramos', 'JulianoRamos')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});