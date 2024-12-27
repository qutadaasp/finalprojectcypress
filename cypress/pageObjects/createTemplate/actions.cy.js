class createtemplateaction{
    createfromtemp(){
        cy.findByTestId("card-template-list-button").first().click()
        cy.findByTestId("create-new-template-card-button").click()
        
        return this
    }
    TypeTitleinfield(cardtitle){
        cy.findByTestId("create-template-card-composer").type(cardtitle)
        return this
    }

    Addcard(){
        cy.findByTestId("new-template-card-submit-button").click()
        return this
        
    }

    typedesc(carddescr){
        cy.get("#ak-editor-textarea").type(carddescr)
        return this
    }

    savecard(){
        cy.findByTestId("description-save-button").click()
        cy.get(".oFGLCx1ywahDGo").click()
        return this
    }
}

export default createtemplateaction