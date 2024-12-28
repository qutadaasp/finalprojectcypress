class Updateactions {
    
    clicksonfield(){
        cy.findByTestId("card-name").rightclick()
        return this
    }
    
    updateaname(newname){
        cy.findByTestId("quick-card-editor-card-title").type(newname)
        return this
    }

    savevhange(){
        cy.get("[type=submit]").click()
        return this
    }
}
export default Updateactions