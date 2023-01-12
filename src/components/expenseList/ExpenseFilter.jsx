import React from 'react'
import Chart from './Chart'
import './expenseList.scss'
const ExpenseFilter = ({expenses}) => {
  return (
    <div > 
        <div className='title-filter' >
            <label htmlFor='years' >Фильтр по году</label>

            <select className='years-section' >
                <option value="2020"> 2020 </option>
                <option value="2021"> 2021 </option>
                <option value="2022"> 2022 </option>
                <option value="2023"> 2023 </option>
            </select>
        </div>
        <div>
            <Chart expenses={expenses} />
        </div>



    </div>
  )
}

export default ExpenseFilter