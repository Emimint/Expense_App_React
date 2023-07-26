import React from "react";
import Card from "../UI/Card";

import "./ExpensesFilter.css";

/*
Forward year to Expenses
Store the year as a state in Expenses

*/

const ExpensesFilter = ({ onYearSelection }) => {
  return (
    <Card className="expenses">
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select
            onChange={(e) => {
              onYearSelection(e.target.value);
            }}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
