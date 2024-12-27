/// <reference types = "cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../support/datautils.cy";
import createcardactions from "../../pageObjects/createCard/actions.cy";
import createtemplateaction from "../../pageObjects/createTemplate/actions.cy";
import assertiontempl from "../../pageObjects/createTemplate/assertions.cy";

const datautil = new datautils()
const boardname = "Q1"
let boardurl,boardid
const createcardaction = new createcardactions()
const cardname = "mycard"
const createactiontemp = new createtemplateaction()
let carddescr = "Hello Template"
const assert = new assertiontempl()

before(()=>{
    //create board using request
    datautil.createboard(boardname)
    .then((response)=>{
        cy.log(response.body.url)
        boardurl=response.body.url
        boardid = response.body.id
    })
    cy.loginToTrello()
})


Given("User Navigate to the board",()=>{
    createcardaction.openboard(boardurl)
    //createcardaction.clickonAddacardbutton()
})
When("Clicks on create from template button",()=>{
    createactiontemp.createfromtemp()
})

When("Types Card Title",()=>{
    createactiontemp.TypeTitleinfield(cardname)
})
When("Add a card",()=>{
      createactiontemp.Addcard()
})
When("Types Description",()=>{
    cy.wait(3000)
    createactiontemp.typedesc(carddescr)
})

When("Clicks on save button",()=>{
createactiontemp.savecard()
})


Then("New card will add to the board",()=>{
    assert.checktemplate()
})

after(()=>{
    cy.wait(3000)
    datautil.deleteboard(boardid)
})