/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Selecionar um produto da lista', () => {

        // cy.get('.product-block').first().click() - Primeiro elemento
        // cy.get('.product-block').last().click() - último elemento
        // cy.get('.product-block').eq(2).click() - captura pela posicao definida
        cy.get('.product-block').contains('Argus All-Weather Tank').click()
        cy.get('.information').should('contain', 'Argus All-Weather Tank')

    });

});