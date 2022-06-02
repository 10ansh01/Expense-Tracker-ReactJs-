import React, { useState } from 'react';
import './css/ExpenseForm.css'

const ExpenseForm = (props) => {

    //There are alternatives to update the state descibed below. but here we are going to use this multiple state concept only
    const [title, setEnteredTitle] = useState('');
    const [amount, setEnteredAmount] = useState('');
    const [date, setEnteredDate] = useState('');

    // here above we are repeating same line 3 times so instead we can figure out a better way to manage multiple states:

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // }); //here we are copying the object using spread operator as it is from L.11 and then replacing the enteredTitle value with the updated one

        //in the above case this is not correct because the most correct way to update the state would be by considering the previous state also
        //we do this by passing a function in setUserInput instead of passing an object and it recieves the previous state in prevState
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value}}) //we can do this
    }

    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // }); 
    }

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // }); 
    }

    const submitHandler = (e) => {
        e.preventDefault() //by default when we submit through a button, the page gets reloaded so we are preventing the deafault page load behaviour
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.setSavedExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={title} onChange={titleChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" type="number" min="1" step="0.01" value={amount} onChange={amountChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" min="2022-01-01" step="2022-12-31" value={date} onChange={dateChangeHandler} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
