class DeletecardActions{
    addarchive(){
        cy.findByTestId("trello-card")
        cy.wait(1000)
        cy.screenshot({capture:"fullPage"})
        cy.findByTestId("trello-card").rightclick()
        cy.get(".BppQGb2j7TfyB5").last().click()
        return this
    }
    clicksmenue(){
        cy.get(".GDunJzzgFqQY_3").last().click()
        return this
    }

    choosearchive(){
        cy.get(".TJ69T0gm8D5GkA").eq(2).click()
        return this
    }

    clicksdelete(){
        cy.get(".je6AvjOt_2Gpxt").last().click()
        cy.get("[aria-label=delete-confirm]").click()
        return this
    }
}

export default DeletecardActions