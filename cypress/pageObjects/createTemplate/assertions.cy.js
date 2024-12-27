class assertiontempl {
   checktemplate(){
    cy.findByTestId("list-cards").eq(1)
    return this
   }
}
export default assertiontempl