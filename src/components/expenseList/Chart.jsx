import React from "react";
import "./chart.scss";
import ChartBar from "./ChartBar";

import styled from 'styled-components'

const Container = styled.div`
        padding: 1rem;
    border-radius: 12px;
    background-color: #f8dfff;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    width: 718px;
    margin: 10px auto;
`

const Chart = ({ expenses }) => {
  const maximumPrice = 2000;

  const months = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
      const monthNumber = item.date.getMonth();
      console.log(monthNumber);

    //months[monthNumber].currentPrice += item.amount;
  });

  return (
    <Container>
      {months.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maximumPrice={maximumPrice}
        />
      ))}
    </Container>
  );
};

export default Chart;
