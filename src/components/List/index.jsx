import React from "react";
import { CardDashboard } from "../Card";
import  './index.css'




export const ListDashboard = ({listTransactions, setListTransactions, newListFiltered }) => {


    const removeItem = (itemId) => { 
        const newListRemoved = listTransactions.filter((element)=>{
            return element.description !== itemId
        })
        setListTransactions(newListRemoved)
    }

    if(listTransactions.length === 0){
        return(
            
            <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <div className="without-content">
                <div className="space1"></div>
                <div className="space2"></div>
            </div>
            <div className="without-content">
                <div className="space1"></div>
                <div className="space2"></div>
            </div>
            <div className="without-content">
                <div className="space1"></div>
                <div className="space2"></div>
            </div>
            </>
        )
    }else{
        return(
            <ul className="Content-list">
    
                {
                    
                    newListFiltered.map((element,index)=>{
                        
                        return(
                            <CardDashboard itemList={element} key={index} listTransactions={listTransactions}  id={index} removeItem={removeItem} />
                        )
                    })
                }
    
                
            </ul>
        )
    }

  
}