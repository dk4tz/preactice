import { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {'id': 'e1', 'title': 'Car Insurance', 'amount': 268.28, 'date': new Date(2021, 2, 28)},
  {'id': 'e2', 'title': 'Home Insurance', 'amount': 1000.28, 'date': new Date(2022, 4, 28)},
  {'id': 'e3', 'title': 'Motorcycle Insurance', 'amount': 42.28, 'date': new Date(2022, 9, 28)},
  {'id': 'e4', 'title': 'Life Insurance', 'amount': 100.28, 'date': new Date(2021, 2, 28)},
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
