import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <Card className="expenses">
      <div>{selectedYear}</div>
      <ExpensesFilter onYearSelection={setSelectedYear} />
      {expenses.map(ExpenseItem)}
    </Card>
  );
}

export default Expenses;
