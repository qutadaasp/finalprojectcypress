class MoveTemp {
    clicksonfield(){
        cy.findByTestId("card-name").rightclick()
        return this
    }

    clicksonmove(){
        cy.findByTestId("quick-card-editor-move").click()
        return this
    }

    chooselist(listname){
        cy.findByTestId("move-card-popover-select-list-destination").click()
        cy.get('.css-1tbvomj').eq(1).type(listname+"{enter}");
        return this
    }
    clickmove(){
        cy.findByTestId("move-card-popover-move-button").click()
        return this
    }
}
export default MoveTemp