import Expenses from "./components/Expenses/Expenses";

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
  {
    id: "e6",
    title: "Trip to Charlevoix",
    amount: 679.5,
    date: new Date(2023, 7, 16),
  },
];

function App() {
  return (
    <div>
      <h1>💵 Expense Manager 💰</h1>
      <h2>An expense tracker app for your day-to-day expenses 🤗</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
