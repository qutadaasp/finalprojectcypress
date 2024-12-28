class MoveTemp {
    clicksonfield(){
        cy.findByTestId("card-name").rightclick()
        return this
    }

    clicksonmove(){
        cy.findByTestId("quick-card-editor-move").click()
        return this
    }

    chooselist(listName){
        cy.findByTestId("move-card-popover-select-list-destination")
        return this
    }
    clickmove(){
        cy.findByTestId("move-card-popover-move-button").click()
        return this
    }
}
export default MoveTemp