

class FoodTruckPage {

    addReview(review) {
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`).click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
    }

    validateReview(user, review){        
        cy.get('.details > strong').should('have.text',user.name)
        cy.get('.details > span').should('have.text',user.instagram)
        cy.get('.comment').should('have.text',review.comment)               
    }

}

export default new FoodTruckPage()