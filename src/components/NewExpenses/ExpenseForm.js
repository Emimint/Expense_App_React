import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initialInput = {
    title: "",
    amount: "",
    date: "",
  };
  const [enteredInput, setEnteredInput] = useState(initialInput);

  const inputChangeHandler = (id, value) => {
    setEnteredInput((previousState) => {
      if (id === "title") {
        return { ...previousState, title: value };
      } else if (id === "amount") {
        return { ...previousState, amount: +value };
      } else if (id === "date") {
        return { ...previousState, date: value };
      }
      return initialInput;
    });
  };

  /*  const titleChangeHandler = (e) => {
    setEnteredInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: e.target.value,
      };
    });
    console.log(e.target.value);
    console.log(enteredInput.enteredTitle);
  };
  const amountChangeHandler = (e) => {
    setEnteredInput((previousState) => {
      return {
        ...previousState,
        enteredAmount: e.target.value,
      };
    });
    console.log(e.target.value);
    console.log(enteredInput.enteredAmount);
  };
  const dateChangeHandler = (e) => {
    setEnteredInput((previousState) => {
      return {
        ...previousState,
        enteredDate: e.target.value,
      };
    });
    console.log(e.target.value);
    console.log(enteredInput.enteredDate);
  }; */

  const submitHandler = (e) => {
    e.preventDefault();
      enteredInput.date = new Date( enteredInput.date );
      props.onSaveExpenseData(enteredInput);
    inputChangeHandler(); // to reset all values to default
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={enteredInput.title}
            onChange={(e) => {
              inputChangeHandler("title", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            value={enteredInput.amount}
            min="0.01"
            step="0.01"
            onChange={(e) => {
              inputChangeHandler("amount", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            value={enteredInput.date}
            min="2015-01-01"
            max="2023-07-26"
            onChange={(e) => {
              inputChangeHandler("date", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
