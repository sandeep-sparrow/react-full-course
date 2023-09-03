import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 247.86, date: new Date(2021, 9, 2)},
    {id: 'e2', title: 'Bike Insurance', amount: 147.86, date: new Date(2021, 9, 2)},
    {id: 'e3', title: 'Mobile Insurance', amount: 47.86, date: new Date(2021, 9, 2)},
    {id: 'e4', title: 'Laptop Insurance', amount: 147.86, date: new Date(2021, 9, 2)},
    {id: 'e5', title: 'iPad Insurance', amount: 87.86, date: new Date(2021, 9, 2)},
]

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
