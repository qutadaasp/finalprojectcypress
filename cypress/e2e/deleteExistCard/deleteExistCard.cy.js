//https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken

/// <reference types = "cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../support/datautils.cy";
import createcardactions from "../../pageObjects/createCard/actions.cy";
import DeletecardActions from "../../pageObjects/deleteExistCard/Actions.cy";
import Assertioncarddelete from "../../pageObjects/deleteExistCard/Assertions.cy";


const DeletecardAction = new DeletecardActions()
const datautil = new datautils()
const boardname = "Q1"
let boardurl,boardid,listname="First",listid
const createcardaction = new createcardactions()
let cardname
const Assertioncarddelet = new Assertioncarddelete()
//let carddeletename

before(()=>{
    //create board using request
    datautil.createboard(boardname)
    .then((response)=>{
        cy.log(response.body.url)
        boardurl=response.body.url
        boardid = response.body.id

        datautil.createlist(listname,boardid).then((response)=>{
            cy.log(response.body.url)
            
        })

        datautil.getlistid(boardid).then((respons)=>{
            cy.log(respons.body.url)
            listid=respons.body[0].id
            cardname = "mycard"
            datautil.createcard(listid,cardname)
            
            
        })

        
    })
    
    
    cy.loginToTrello()
  
})

Given("The user navigate to the board",()=>{
 createcardaction.openboard(boardurl)
 
})

//quick-card-editor-archive
When("Move card to archive",()=>{
    
    DeletecardAction.addarchive()
})

When("Clicks menue button",()=>{
    DeletecardAction.clicksmenue()
})

When("Choose Archive items",()=>{
    DeletecardAction.choosearchive()
})

When("Clicks delete",()=>{
    DeletecardAction.clicksdelete()
})


Then("The card will delete",()=>{
       cy.log("assert")
       Assertioncarddelet.assertafterdel()
})


after(()=>{
    cy.wait(3000)
    datautil.deleteboard(boardid)
})