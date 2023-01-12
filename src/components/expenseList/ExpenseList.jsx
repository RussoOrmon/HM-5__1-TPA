import React from 'react'
import './expenseList.scss'

const ExpenseList = ({expenses}) => {
  return (
    <div>
        {expenses.map((item)=>{

const month = item.date.getMonth();
const day = item.date.getDate();
const year = item.date.getFullYear();
return (
<div key={item.id} className="expense-container"  >
    <div className='date-block' >
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>

    <div className='title-expense' >
        <h2> {item.title} </h2>
    </div>
        <div className='price-expense' > $  { item.amount}  </div>

 </div>
)
})}
    </div>
  )
}

export default ExpenseList