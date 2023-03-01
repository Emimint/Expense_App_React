import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import DiddlelySquats from "./DiddlelySquats";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <DiddlelySquats date={props.date}></DiddlelySquats>
        <p>
          the key for this object is {props.id}
        </p>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
