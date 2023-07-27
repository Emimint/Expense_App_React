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
      <ExpensesFilter onYearSelection={setSelectedYear} />
      {selectedExpenses.length === 0 ? (
        <p>No expenses for the selected year</p>
      ) : (
        selectedExpenses.map(ExpenseItem)
      )}
    </Card>
  );
}

export default Expenses;
