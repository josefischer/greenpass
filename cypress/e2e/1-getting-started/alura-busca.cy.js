
describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca')
            .should('be.visible')
            .type('java')

        cy.get('.header__nav--busca-submit')
            .click()

        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Certificação Java')
    })

})