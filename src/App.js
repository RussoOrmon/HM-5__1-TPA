
import './App.css';
import Expense from './components/expense/Expense';

const expenses = [
  {
    id: 1,
    title: "Новый телевизор",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 2,
    title: "Страхование автомобиля",
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: "Новый письменный стол (ореховый)",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "Кресло руководителя (кожа натуральная)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div className="App">
      <h1>#hELlo@</h1>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
