import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import DiddlelySquats from "./DiddlelySquats";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <DiddlelySquats date={props.date}></DiddlelySquats>
        <p>the key for this object is {props.id}</p>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
