import signupPage from '../support/pages/Signup'
describe('Signup', () => {
    it('deve cadastrar um novo usuário', () => {

        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'pwd123'
        } 

        cy.deleteMany({instagram: user.instagram},{collection: 'users'}).then(res => { // defaults to collection and database from env variables
            cy.log(res); // prints '# documents deleted'
        })

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
       
    })
    
})