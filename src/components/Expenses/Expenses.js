import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const onYearSelection = (selection) => {
    setSelectedYear(selection);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>{selectedYear}</div>
      <ExpensesFilter onYearSelection={onYearSelection} />
      {expenses.map(ExpenseItem)}
    </Card>
  );
}

export default Expenses;
