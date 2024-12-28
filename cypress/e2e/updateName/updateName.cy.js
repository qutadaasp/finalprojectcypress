/// <reference types = "cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../support/datautils.cy";
import createcardactions from "../../pageObjects/createCard/actions.cy";
import createtemplateaction from "../../pageObjects/createTemplate/actions.cy";
import Updateactions from "../../pageObjects/updateName/actions.cy";
import assertupdate from "../../pageObjects/updateName/assertions.cy";

const updatetemp = new Updateactions()
const asserttemp = new assertupdate()
const datautil = new datautils()
const boardname = "Q1"
const newname ="UpdateName"
let boardurl,boardid
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

When("Clicks on title field",()=>{
          updatetemp.clicksonfield()
})

When("Type new name in field",()=>{
           updatetemp.updateaname(newname)
})

When("Clicks save button",()=>{
          updatetemp.savevhange()
})

Then("The name update",()=>{
       asserttemp.assertname()
})

after(()=>{
    cy.wait(3000)
    datautil.deleteboard(boardid)
})
