/// <reference types = "cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../support/datautils.cy";
import createcardactions from "../../pageObjects/createCard/actions.cy";
import createtemplateaction from "../../pageObjects/createTemplate/actions.cy";
import hideactions from "../../pageObjects/hideTemplate/actions.cy";
import assertionhide from "../../pageObjects/hideTemplate/assertions.cy";


const hide= new hideactions()
const assert = new assertionhide()

const datautil = new datautils()
const boardname = "Q1"
let boardurl,boardid,listname="Doing"
const createcardaction = new createcardactions()
const cardname = "mycard"
const createactiontemp = new createtemplateaction()
let carddescr = "Hello Template"

before(()=>{
    //create board using request
    datautil.createboard(boardname)
    .then((response)=>{
        cy.log(response.body.url)
        boardurl=response.body.url
        boardid = response.body.id

        cy.loginToTrello()
        createcardaction.openboard(boardurl)
        createactiontemp.createfromtemp()
        createactiontemp.TypeTitleinfield(cardname)
        createactiontemp.Addcard()
        cy.wait(3000)
        createactiontemp.typedesc(carddescr)
        createactiontemp.savecard()
    })
   
})

Given("User navigate to the board",()=>{
    createcardaction.openboard(boardurl)
})

When("Clicks on Template",()=>{
    hide.clicksonfield()
})

When("Clicks on hide button",()=>{
    hide.clickhide()
})

Then("The template removed",()=>{
    assert.assertafterhide()
})

after(()=>{
    cy.wait(3000)
    datautil.deleteboard(boardid)
})
