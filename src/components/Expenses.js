import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return <div>{props.expenses.map(ExpenseItem)}</div>;
}

export default Expenses;
