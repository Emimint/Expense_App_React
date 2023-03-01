import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 2, 31),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 1, 10),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 9, 11),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 12, 12),
  },
  {
    id: "e5",
    title: "Dining at Ritz hotel",
    amount: 200.12,
    date: new Date(2023, 1, 16),
  },
];

function createExpenses(myExpense) {
  return (
    <ExpenseItem
      key={myExpense.id}
      id={myExpense.id}
      title={myExpense.title}
      amount={myExpense.amount}
      date={myExpense.date}
    ></ExpenseItem>
  );
}

function App() {
  
  return (
    <div>
      {
        expenses.map(createExpenses)
      }
    </div>
  );

}

export default App;
