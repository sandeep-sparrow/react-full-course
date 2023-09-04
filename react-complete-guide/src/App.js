import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 247.86, date: new Date(2021, 9, 2)},
    {id: 'e2', title: 'Bike Insurance', amount: 147.86, date: new Date(2021, 9, 2)},
    {id: 'e3', title: 'Mobile Insurance', amount: 47.86, date: new Date(2021, 9, 2)},
    {id: 'e4', title: 'Laptop Insurance', amount: 147.86, date: new Date(2021, 9, 2)},
    {id: 'e5', title: 'iPad Insurance', amount: 87.86, date: new Date(2021, 9, 2)},
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
    expenses.push(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
