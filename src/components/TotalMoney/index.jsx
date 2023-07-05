import './index.css'

export const TotalMoney = ({listTransactions}) => {

    const listForSum = listTransactions.map((element)=>{
        return element
    })

    const sumValue = listForSum.reduce((acc, cNumber)=>{
        return Number(acc) + Number(cNumber.value)
    },0)

    
    return (
        <div className="Show-data">
                        <div className="Total-value">
                            <h3 className="Value-title">Valor total</h3>
                            <p>O valor se refere ao saldo</p>
                        </div>
                                {
                                    <p className='Value-number'>R$ {sumValue}</p>
                                }
        </div>
    )
}