
import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Heidy',
      instagram: '@heidysaar',
      password: '1305'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()        

    mapPage.loggedUser(user.name)
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@heidysaar',
      password: '123456'
    }
    
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@saarheidy',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()   
    
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })


  //---------------------------DESAFIO------------------------------
  it('instagram deve ser obrigatório', () => {
    const user = {        
      password: '1305'
    }
    
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@heidysaar',
      
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatórios', () => {

    loginPage.go()    
    loginPage.submit()
    
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
})
