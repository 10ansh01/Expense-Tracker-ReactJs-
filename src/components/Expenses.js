import './css/Expenses.css';
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [currentlySelectedYear, setFilteredYear] = useState('2022');

  const getSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return (expense.date.getFullYear().toString() === currentlySelectedYear) || (currentlySelectedYear === 'None')
  })

  return (
    <div>
      <Card className="expenses">
        {props.items.length > 0 && <ExpensesFilter defaultYear={currentlySelectedYear} onFilter={getSelectedYear} />}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;