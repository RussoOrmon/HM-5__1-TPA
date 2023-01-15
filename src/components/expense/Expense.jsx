import React from "react";
import ExpenseFilter from "../expenseList/ExpenseFilter";
import ExpenseList from "../expenseList/ExpenseList";
import "./expense.scss";
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    flex-direction: column;
`

const Expense = ({ expenses }) => {
  //console.log(expenses);

  return (
    <Container >
      <div className="filter-block">
        <ExpenseFilter expenses={expenses} />
        {expenses.map((item) => (
          <ExpenseList  key={item.title} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Expense;
