import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import DiddlelySquats from "./DiddlelySquats";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <DiddlelySquats date={props.expense.date}></DiddlelySquats>
        <p>the key for this object is {props.expense.id}</p>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
