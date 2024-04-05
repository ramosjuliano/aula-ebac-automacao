/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get('.information').should('contain', 'Argus All-Weather Tank')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Selene Yoga Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.information').should('contain', produto)
    });

    it('Deve visitar a pagina do produto', () => {
        let produto = 'Selene Yoga Hoodie'
        produtosPage.visitarProduto(produto)
        cy.get('.information').should('contain', produto)
    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Selene Yoga Hoodie'
        let qtd = 2
        produtosPage.buscarProduto(produto)
        produtosPage.adicionarProdutoCarrinho('M', 'White', qtd)
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.adicionarProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
        })
    });

});