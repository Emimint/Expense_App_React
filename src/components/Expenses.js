import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses({ expenses }) {
  return <Card className="expenses">{expenses.map(ExpenseItem)}</Card>;
}

export default Expenses;
