// import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import DiddlelySquats from "./DiddlelySquats";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // let ponct = "!";

  // const [title, setTitle] = useState(props.title); // React hook

  // const clickHandler = () => {
  //   const newTitle = title + ponct;
  //   setTitle(newTitle);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <DiddlelySquats date={props.date}></DiddlelySquats>
        <p>the key for this object is {props.id}</p>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
