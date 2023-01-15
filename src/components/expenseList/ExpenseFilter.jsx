import React from "react";
import Chart from "./Chart";
import "./expenseList.scss";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  
  & label {
      margin-top: 25px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    }
`;

const SelectStyled = styled.select`
      width: 124px;
    height: 43px;
    border-radius: 6px;
    margin: 10px 0 0 ;
    text-align: center;
    font-size: 18px;

`

const ExpenseFilter = ({ expenses }) => {
  return (
    <>
      <Container //className='title-filter'
      >
        <label htmlFor="years">Фильтр по году</label>

        <SelectStyled className="years-section">
          <option value="2020"> 2020 </option>
          <option value="2021"> 2021 </option>
          <option value="2022"> 2022 </option>
          <option value="2023"> 2023 </option>
        </SelectStyled>
      </Container>

      <div>
        <Chart expenses={expenses} />
      </div>
    </>
  );
};

export default ExpenseFilter;
