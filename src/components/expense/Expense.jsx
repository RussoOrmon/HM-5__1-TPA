import React from 'react'
import ExpenseFilter from '../expenseList/ExpenseFilter';
import ExpenseList from '../expenseList/ExpenseList';
import Button from '../UI/button/Button';
import './expense.scss';

const Expense = ({expenses}) => {
    console.log(expenses);
  return (
    <div className='main-container' >
        <form action='' method='POST'  className='expenses-container'>
            {/*<h1>Expense</h1>*/}
            <div className='input-block' >
                <label htmlFor="title"> Заголовок 
                    <input type="text" id='title' required />
                </label>
                

                <label htmlFor="amount"> Количество 
                    <input type="text" id='amount' required />
                </label>
                
                
            </div>
            <div className='date-input' >
            <label htmlFor="date"> Дата
            <input type="date" id='date' required /> </label>
            </div>
            <div className='btn-container' > 
                <Button children="Отмена" />
                <Button children="Добавить расходы" />
            
                 </div>
        </form>
        <div className='filter-block' >
            <ExpenseFilter expenses={expenses} />
            <ExpenseList expenses={expenses} />
        </div>
    
    </div>
)
}

export default Expense