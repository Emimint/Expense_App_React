import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const selectedExpenses = expenses.filter(
    (expense) => selectedYear === expense.date.getFullYear()
  );
  return (
    <Card className="expenses">
      <div>{selectedYear}</div>
      <ExpensesFilter onYearSelection={setSelectedYear} />
      {selectedExpenses.map(ExpenseItem)}
    </Card>
  );
}

export default Expenses;
