import React from "react"
import { TotalMoney } from "../TotalMoney"
import './index.css'


export const FormData = ({listTransactions, setListTransactions}) => {

    const dataForm = (e) => {
        e.preventDefault()

        if(e.target.parentElement[1].value === '' || e.target.parentElement[0].value === ''  ){
           
        }else{
            const data = {
                
                description: e.target.parentElement[0].value,
                type: e.target.parentElement[2].options[e.target.parentElement[2].selectedIndex].value,
                value: e.target.parentElement[1].value,
               
            }
            
            setListTransactions([...listTransactions, data])
        }
       
    }

    

    return (

        <section className="Form-data">
                    <form >
                        <div className="Form-data-description">
                            <label htmlFor="">Descrição</label>
                            <input type="text" name='fdescription' placeholder="Digite aqui sua descrição" />
                            <span>Ex: Compra de roupas</span>
                        </div>
                        <div className="Form-data-values-inputs">
                           <div className='Values-div'>
                                    <div className="Value">
                                        <label htmlFor="">Valor</label>
                                        <input type='number' name='fvalueinput' placeholder='Valor em R$' />
                                    </div>
                                    <div className="Value-type">
                                    <label htmlFor="">Valor</label>
                                    <select name="" id="" >
                                        <option value="entrada">Entrada</option>
                                        <option value="saída">Saída</option>
                                    </select>
                                    </div>
                           </div>
                        </div>
                        <button onClick={dataForm} className="Button-insert-values" type='submit' >Inserir valor</button>
                    </form>
                    <TotalMoney listTransactions={listTransactions} />
                </section>
    )
}