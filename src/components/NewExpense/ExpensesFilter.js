import React from 'react';
import '../NewExpense/css/ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const yearSelector = e => {
        props.onFilter(e.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={yearSelector}>
        <option value='None'>None</option>
         <option value='2025'>2025</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;