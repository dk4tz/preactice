import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {'id': 'e1', 'title': 'Car Insurance', 'amount': 268.28, 'date': new Date(2021, 2, 28)},
    {'id': 'e2', 'title': 'Home Insurance', 'amount': 1000.28, 'date': new Date(2021, 2, 28)},
    {'id': 'e3', 'title': 'Motorcycle Insurance', 'amount': 42.28, 'date': new Date(2021, 2, 28)},
    {'id': 'e4', 'title': 'Life Insurance', 'amount': 100.28, 'date': new Date(2021, 2, 28)},
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
