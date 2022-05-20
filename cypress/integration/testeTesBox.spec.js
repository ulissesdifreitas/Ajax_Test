
describe("Teste Git", () => {
    it("Acessar o Site Demo QA", () => {
        cy.visit("https://demoqa.com/");
    })
    it("Selecionar o menu 'Elements'", () => {
        cy.get('.card-body').contains("Elements").click();
    })
    it("Selecionar a aba 'Text Box'", () => {
        cy.get("#item-0").click();
    })
    it("Preencher campos com 'nome, email, mensagem' ", () => {
        cy.get("#userName").type("Maria torres");
        cy.get("#userEmail").type("torres.m@teste.com");
        cy.get("#permanentAddress").type("Teste de Git passou!");
    })

})