class hideactions {
     
    clicksonfield(){
        cy.findByTestId("card-name").rightclick()
        return this
    }

    clickhide(){
        cy.findByTestId("quick-card-editor-archive").click()
        return this
    }
}
export default hideactions