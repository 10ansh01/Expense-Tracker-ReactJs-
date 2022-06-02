import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = () => {

  const [expenses, setExpense] = useState([])
  const expenseDataHandler = (fetchedExpenseData) => {
    setExpense((prevExpenses) => {
      return [fetchedExpenseData, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <div className="App-header">
        <NewExpense onAddExpense={expenseDataHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
