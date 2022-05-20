/// <reference types = "cypress"/>

describe("testes 01", () => {

    it("Acessando o site Demo QA", () => {
        cy.visit("https://demoqa.com/")
    })

    it("Clicando em Elements", () => {
        cy.get(".category-cards").contains("Elements")
            .click()
    })

    it("Selecionado 'web tables'", () => {
        cy.get(".menu-list").contains("Web Tables")
            .click()
    })

    it("Clicando em 'ADD'", () => {
        cy.get("#addNewRecordButton")
            .click()
    })

    it("Preenchendo dados", () => {
        cy.get("#firstName").focus().type("Ana")
        cy.wait(1000)
        cy.get("#lastName").focus().type("Vitória")
        cy.wait(1000)
        cy.get("#userEmail").focus().type("ana.vitoria@ajaxti.com.br")
        cy.wait(1000)
        cy.get("#age").focus().type("22")
        cy.wait(1000)
        cy.get("#salary").focus().type("100")
        cy.wait(1000)
        cy.get("#department").focus().type("TI")
        cy.wait(1000)
    })

    it("Salvando", () => {
        cy.get("#submit").click()
    })

})