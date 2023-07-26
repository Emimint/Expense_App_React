import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredInput, setEnteredInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = (id, value) => {
    setEnteredInput((previousState) => {
      if (id === "title") {
        return { ...previousState, enteredTitle: value };
      } else if (id === "amount") {
        return { ...previousState, enteredAmount: value };
      } else {
        return { ...previousState, enteredDate: value };
      }
    });
    console.log(enteredInput);
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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            onChange={(e) => {
              inputChangeHandler("title", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
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
            min="2015-01-01"
            max="2023-07-26"
            onChange={(e) => {
              inputChangeHandler("date", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
