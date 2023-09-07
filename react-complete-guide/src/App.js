import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';

const DUMMY_EXPENSE = [
  {id: 'e1', title: 'Car Insurance', amount: 247.86, date: new Date(2021, 9, 2)},
  {id: 'e2', title: 'Bike Insurance', amount: 147.86, date: new Date(2021, 3, 2)},
  {id: 'e3', title: 'Mobile Insurance', amount: 47.86, date: new Date(2020, 2, 2)},
  {id: 'e4', title: 'Laptop Insurance', amount: 147.86, date: new Date(2020, 9, 2)},
  {id: 'e5', title: 'iPad Insurance', amount: 87.86, date: new Date(2021, 9, 2)},
  {id: 'e6', title: 'Car Insurance 1', amount: 247.86, date: new Date(2022, 5, 2)},
  {id: 'e7', title: 'Bike Insurance 1', amount: 147.86, date: new Date(2019, 11, 12)},
  {id: 'e8', title: 'Bike Insurance 1', amount: 127.86, date: new Date(2019, 10, 12)},
  {id: 'e9', title: 'Mobile Insurance 1', amount: 47.86, date: new Date(2020, 6, 6)},
  {id: 'e10', title: 'Laptop Insurance 1', amount: 147.86, date: new Date(2020, 12, 9)},
  {id: 'e11', title: 'iPad Insurance 1', amount: 87.86, date: new Date(2022, 1, 1)},
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
