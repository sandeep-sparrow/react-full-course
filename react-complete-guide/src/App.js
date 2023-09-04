import ExpensesFilter from './components/Expenses/ExpenseFilter';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';

const DUMMY_EXPENSE = [
  {id: 'e1', title: 'Car Insurance', amount: 247.86, date: new Date(2021, 9, 2)},
  {id: 'e2', title: 'Bike Insurance', amount: 147.86, date: new Date(2021, 9, 2)},
  {id: 'e3', title: 'Mobile Insurance', amount: 47.86, date: new Date(2021, 9, 2)},
  {id: 'e4', title: 'Laptop Insurance', amount: 147.86, date: new Date(2021, 9, 2)},
  {id: 'e5', title: 'iPad Insurance', amount: 87.86, date: new Date(2021, 9, 2)},
]; 

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
