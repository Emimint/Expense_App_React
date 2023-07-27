import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import Card from "./components/UI/Card";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 2, 31),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 1, 10),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 9, 11),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 12, 12),
  },
];

function App() {
  const [ expenses, setExpenses ] = useState( INITIAL_EXPENSES );
  const [ showDisplay, setDisplay ] = useState( false );

  const addExpenseHandler = (newExpense) => {
    setExpenses( ( previousExpenses ) => [ newExpense, ...previousExpenses ] );
    toggleDisplay();
  };

  const toggleDisplay = () => {
    setDisplay(!showDisplay)
  }

  return (
    <div>
      <h1>💵 Expense Manager 💰</h1>
      <h2>An expense tracker app for your day-to-day expenses 🤗</h2>
      {!showDisplay && (
        <Card className="expenses">
          <button onClick={toggleDisplay}>Add New Expense</button>
        </Card>
      )}
      {showDisplay && <NewExpense onAddExpense={addExpenseHandler} />}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
