import './index.css'

export const CardDashboard = ({itemList, id, removeItem}) => {



return(

    <li className="Content-card" id={id}>
            
            <div className="Content-card-header">
                      
                    <h3>{itemList.description}</h3>
                    <h5>R$ {itemList.value},00</h5>
                    <span className='remove-button' onClick={()=> removeItem(itemList.description)}>Remover</span>
                   
            </div>
            <span className='value-type'>{itemList.type}</span>
            {/* <h4></h4>
            <div className='Void-data-top'></div>
            <div className='Void-data-bottom'></div> */}
        </li>
)

}
