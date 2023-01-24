/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()
//chancejs.com - Para gerar dados aleatório usando a biblioteca Chancejs 

//Mocha  - Test Runner ( (describe , context , it))
// para desabilitar de executar automatico sempre quando salva - WatchForFileChanges = .f. porem é melhor colocar no cypress.json

describe('Cadastro', () => {
    it('Quando eu informasr os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit("https://form-agilizei.netlify.app/")

        //Inputs de texto / textarea / email -> type
        cy.get("input[name=firstName]").type(chance.first())
        cy.get("input[name=lastName]").type(chance.last())
        cy.get("textarea[name=adress]").type(chance.address())
        cy.get("input[name=emailAdress]").type(chance.email())

        // Inputs radoi / checkboxers -> check
        cy.get('input[value=f').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        // Inputs do tipo combobox  / select -> select
       //o # é usado para pegar o ID no select para identificar , foi usado o force apenas para forçar 
       //achar o form na tela porem não é uma boa pratica
        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#years').select('2008', {force: true})
        cy.get('select#months').select('Fevereiro', {force: true})
        cy.get('select#days').select('20', {force: true})

        // Inputs de senha podemos usar type
        cy.get('input#firstpassword').type('T@i1234')
        cy.get('input#secondpassword').type('T@i1234')

        // Inputs do tipo button -> click
       cy.contains('Finalizar cadastro').click()
       //podemos pegar pelo nome do componente usando o contains ou pelo tipo do seletor. 
       //  cy.get('button#submitbtn').click()

       //ASSERÇÕES 
       //Espero que minha aplicação seja direcionada para a listagem via url, usanod o should

       cy.url().should('contain', 'listagem')
    
    });
    


});