import React, { useState } from "react";
import ExpenseForm from "../expense/ExpenseForm";
import Button from "../UI/button/Button";
import styled from 'styled-components'

const Container = styled.div`
    background-color: 
    #AD9BE9;
    width: 750px;
    height: 247px;
    border-radius: 12px;
    border: 2px solid #AD9BE9;
    margin: 20px auto;
    padding: 40px 10px;
    color: #000000;
    display: flex;
    flex-direction: column;
`

const NewExpense = ({ addNewExpenseHandler }) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Container >
      {showForm ? (
        <ExpenseForm
          onNewExpenseAdd={addNewExpenseHandler}
          onShowForm={showExpenseForm}
        />
      ) : (
        <Button children="Добавить новый расход" onClick={showExpenseForm} />
      )}
    </Container>
  );
};

export default NewExpense;
