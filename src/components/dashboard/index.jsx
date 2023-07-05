import './index.css'
import { useState } from 'react'
import { ListDashboard } from '../List'
import { FormData } from '../Form'



export const Dashboard = ({listTransactions, setListTransactions, setCurrentPage}) => {


    const [filter, setFilter] = useState('Todos')
    const newListFiltered = listTransactions.filter((element) =>  filter === 'Todos' ? true : filter === element.type)
    
    
    return(
        <div className="Container-dashboard">
            <header className="Dashboard-header">
                <div className="Logo"><span> Nu </span>Kenzie</div>
                <div className="Init-button">
                    <button onClick={() => setCurrentPage(true)}>Início</button>
                </div>
            </header>


            <div className="Results-header">
           
                        <h2 className="Results-header-title">Resumo financeiro</h2>
                        <div className="Results-header-buttons">
                            <div onClick={ () => setFilter('Todos') } className='Input-all'><input type="radio" value='Todos' name='a'  /><label htmlFor="1">Todos</label></div>
                            <div onClick= { () => setFilter('entrada') } className='Input-in'><input type="radio" value='Entradas' name='a' /><label htmlFor="2">Entradas</label></div>
                            <div onClick={ () => setFilter('saída') } className='Input-out'><input type="radio" value='Despesas' name='a' /><label htmlFor="3">Despesas</label></div>
                        </div>
            </div>

  
            <div className="Dashboard-content">
                <FormData listTransactions={listTransactions} setListTransactions={setListTransactions} newListFiltered={newListFiltered} />
                <section className="Results">
                    <div className="Results-content">
                        {/* <div className="Content-title">Você ainda não possui nenhum lançamento</div> */}
                        <ListDashboard listTransactions={listTransactions} setListTransactions={setListTransactions} newListFiltered={newListFiltered}  />
                    </div>  
                </section>
            </div>
        </div>
    )
}

