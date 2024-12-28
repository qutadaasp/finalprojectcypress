/// <reference types = "cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../support/datautils.cy";
import createcardactions from "../../pageObjects/createCard/actions.cy";
import createtemplateaction from "../../pageObjects/createTemplate/actions.cy";
import MoveTemp from "../../pageObjects/moveTemplate/actions.cy";
import assertmove from "../../pageObjects/moveTemplate/assertions.cy";


const assertmov = new assertmove()
const datautil = new datautils()
const boardname = "Q1"
let boardurl,boardid,listname="Doing"
const createcardaction = new createcardactions()
const cardname = "mycard"
const createactiontemp = new createtemplateaction()
let carddescr = "Hello Template"
const movetemp = new MoveTemp()
before(()=>{
    //create board using request
    datautil.createboard(boardname)
    .then((response)=>{
        cy.log(response.body.url)
        boardurl=response.body.url
        boardid = response.body.id
        
       // datautil.createlist(listname,boardid).then((response)=>{
         //   cy.log(response.body.url)
            
      //  })
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

When("Right click on template",()=>{
            movetemp.clicksonfield()
})

When("Clicks on move button",()=>{
             movetemp.clicksonmove()
})

When("Choose list",()=>{
      movetemp.chooselist(listname)
})

When("Click Move",()=>{
    movetemp.clickmove()
})

Then("The Template move to list",()=>{
         assertmov.assertmovetemp()
})

after(()=>{
    cy.wait(3000)
    datautil.deleteboard(boardid)
})
