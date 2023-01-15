import React, { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/input/FormInput";

const ExpenseForm = ({ onShowForm, showForm, onNewExpenseAdd }) => {
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [newDate, setNewDate] = useState("");

  const getInputValue = (e) => {
    setTitleValue(e.target.value);
  };

  const getPriceValue = (e) => {
    const value = e.target.value;
    if (value.charAt() !== "-") {
      setPriceValue(value);
    }
  };

  const getDateValue = (e) => {
    setNewDate(e.target.value);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    onShowForm(!showForm);
  };

  const saveHandler = () => {
    const expenseData = {
      title: titleValue ,
      price: priceValue,
      date: newDate ,
    };

    onNewExpenseAdd(expenseData);
    console.log(expenseData)
  };

  return (
    <form>
      <div className="input-block">
        <FormInput
          onChange={getInputValue}
          value={titleValue}
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите ..."
        />
        <FormInput
          onChange={getPriceValue}
          value={priceValue}
          id="amount"
          labelName="Сумма"
          inputType="number"
        />
      </div>

      <div className="date-input">
        <FormInput
          onChange={getDateValue}
          value={newDate}
          id="date"
          labelName="Дата"
          inputType="date"
        />
      </div>

      <div className="btn-container">
        <Button children=" Отмена " onClick={cancelHandler} />
        <Button onClick={saveHandler} children=" Добавить расходы " />
      </div>
    </form>
  );
};

export default ExpenseForm;
