import React from 'react'
import './css/NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
  const savedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm setSavedExpenseData={savedExpenseData} />
    </div>
  )
}
export default NewExpense;
