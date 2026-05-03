describe('Testes da Tabela de Pessoas - CRUD', () => {

    beforeEach(() => {
        // Antes de cada teste, abre a página
        cy.visit('../../index.html');
    });

    it('Cenario: Adicionar, Editar e Excluir pessoa', () => {
        
        // --- CENÁRIO 1: CRIAR ---
        cy.get('.novoNomeInput').type('Joao Cypress');
        cy.get('.novaIdadeInput').type('25');
        cy.get('.novoCargoInput').type('Engenheiro de Testes');
        
        // Clica no botão adicionar
        cy.get('.adicionar').click();

        // Verificação: A tabela deve conter o nome digitado
        cy.get('.tabelaPessoas').should('contain', 'Joao Cypress');
        
        // --- CENÁRIO 2: EDITAR ---
        
        // Procura a linha que contém o texto "Joao Cypress" e dentro dela clica no botão de Editar
        // Isso é muito mais eficiente do que achar pela posição
        cy.contains('tr', 'Joao Cypress').find('.botaoEditar').click();

        // Verificações intermediárias: O botão principal deve ter mudado de texto
        cy.get('.adicionar').should('have.text', 'Salvar Alterações');
        
        // O input nome deve estar preenchido com o valor anterior
        cy.get('.novoNomeInput').should('have.value', 'Joao Cypress');

        // Limpa o campo e digita o novo valor
        cy.get('.novoNomeInput').clear().type('Joao Cypress Editado');

        // Clica em Salvar
        cy.get('.adicionar').click();

        // Verificação: A tabela deve ter o novo nome e não mais o antigo
        cy.get('.tabelaPessoas').should('contain', 'Joao Cypress Editado');
        cy.get('.tabelaPessoas').should('not.contain', 'Joao Cypress');

        // --- CENÁRIO 3: DELETAR ---

        // Procura a linha com o nome editado e clica em Excluir
        cy.contains('tr', 'Joao Cypress Editado').find('.botaoDeletar').click();

        // Verificação: O nome não deve mais existir na tabela
        cy.get('.tabelaPessoas').should('not.contain', 'Joao Cypress Editado');
    });

});