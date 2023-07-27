import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const [ showDisplay, setDisplay ] = useState( false );
  
  const toggleDisplay = () => setDisplay(!showDisplay);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense( expenseData );
    toggleDisplay();
  };

  return (
    <Card className="expenses">
      {!showDisplay && <button onClick={toggleDisplay}>Add New Expense</button>}
      {showDisplay && (
        <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
      )}
    </Card>
  );
};

export default NewExpense;
