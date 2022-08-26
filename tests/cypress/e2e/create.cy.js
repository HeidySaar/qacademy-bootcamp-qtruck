
import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: '1305'
        }

        const foodtruck = {
            latitude: '-19.939242655480857',
            longitude: '-43.938765227794654',
            name: 'Tienda Del Chavo',            
            details: 'O melhor lugar para tomar o suco de limão que parece de groselha e tem sabor de tamarindo',
            opening_hours: 'das 14h às 20h',
            open_on_weekends: true

        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)       

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')

        
        
    })

    it('não deve cadastrar foodtruck com o nome duplicado', () => {
        // 1 - a massa de testes deve ser independentes
        // 2 - latitude e longitude deve ser única
        // 3 - você deve encontrar e corrigir o bug nesse cenário
        
        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: '1305'
        }

        const foodtruck = {
            latitude: '-19.939242655480857',
            longitude: '-43.938765227794654',
            name: 'Tienda Del Chavo',            
            details: 'O melhor lugar para tomar o suco de limão que parece de groselha e tem sabor de tamarindo',
            opening_hours: 'das 14h às 20h',
            open_on_weekends: true

        }

        //cy.apiCreateUser(user)
        cy.uiLogin(user)       

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food fruck já foi cadastrado!')
    })

    it.only('todos os campos são obrigatórios', () => {
        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: '1305'
        }

        const foodtruck = {
            latitude: '-19.939242655480857',
            longitude: '-43.938765227794654',            
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)       

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('O campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!')
    })

})