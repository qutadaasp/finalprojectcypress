import { key,token } from "../support/constants.cy";

class datautils {
    createboard = (boardname)=>{
     return   cy.request("POST",`https://api.trello.com/1/boards/?name=${boardname}&key=${key}&token=${token}`)
    }
    deleteboard =(boardid)=>{
        return     cy.request("DELETE",`https://api.trello.com/1/boards/${boardid}?key=${key}&token=${token}`)

    }
    createlist =(listname,boardid)=>{
        return cy.request("POST",`https://api.trello.com/1/lists?name=${listname}&idBoard=${boardid}&key=${key}&token=${token}`)
    }

    getlistid =(boardId)=>{
        return cy.request("GET",`https://api.trello.com/1/boards/${boardId}/lists?key=${key}&token=${token}`)
    }

    createcard=(listid,cardname)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listid}&name=${cardname}&key=${key}&token=${token}`)
    }
}
export default datautils