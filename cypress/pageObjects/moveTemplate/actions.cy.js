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
        //cy.get(".value-container.css-66zdpf").eq(1).type("Doing").trigger('mousedown', { button: 0 }).get("{Entre}")
        //cy.get('.list').contains('Doing').trigger(findByTestId("list"));
          cy.get("div.css-4xbk0o-singleValue").click()
          cy.contains(listName).click()
        return this
    }
    clickmove(){
        cy.findByTestId("move-card-popover-move-button").click()
        return this
    }
}
export default MoveTemp