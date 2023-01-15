import React from "react";
import "./expenseList.scss";
import styled from "styled-components";

const Container = styled.div`
  width: 748px;
  height: 104px;
  border-radius: 12px;
  background-color: #4b4b4b;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const DateBlock = styled.div`
  width: 84px;
  height: 80px;
  border-radius: 10px;
  border: 2px solid white;
  background-color: #2a2a2a;
  margin: 10px;
`;
const TitleBlock = styled.div`
  width: 550px;
  height: 104px;
  border-radius: 12px;
  margin: auto 10px;
  display: flex;
  justify-content: left;
`;
const PriceBlock = styled.div`
  width: 88px;
  height: 24px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px 18px;
  margin: 25px;
  background-color: #40005d;
  font-size: 20px;
  font-family: "Inter";
  font-weight: 600;
  font-style: normal;
  line-height: 24px;
`;

const ExpenseList = ({ item }) => {
  const month = item.date.getMonth() ;
  const day = item.date.getDate();
  const year = item.date.getFullYear();
  console.log(item.date.getMonth());
  return (
    <Container >
      <DateBlock>
        {/*{item.date.toLocaleDateString({ year: 'numeric', month: 'long', day: 'numeric' })}*/}
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </DateBlock>

      <TitleBlock className="title-expense">
        <h2> {item.title} </h2>
      </TitleBlock>
      <PriceBlock> $ {item.amount} </PriceBlock>
    </Container>
  );
};

export default ExpenseList;
