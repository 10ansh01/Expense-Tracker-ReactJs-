import React, { useState } from 'react';
import Card from './Card';
import './css/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {
    //useState is always called inside of a component function
    //when we use this useState function we need to initialize the state by passing an initial value to the state

    //the useState function ALWAYS returns an array where first element is the value that we need to update and second element is the function that is updating the value

    // we can use the array destructuring conecpt of ES6 to do this like: 
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
        // alert('clicked');
        // props.title = 'updated'
        //writing it this way does not works because if we change the value of any prop in this way, the component does not re-evaluates and hence the 
        // value is not updated. i.e. when this function is invoked, we want the ExpenseItem component to refresh because then only the value will get updated
        // on front end so to tell react that something in the component has changed and we need to re-evaluate the component.. we use states
        // and we use a function called useState. we can call this function inside of a component(L. 9) function and should not be nested in another function 
        //so we can comment L.16


        //when we use this useState hook to change value of any component, the whole component is not re-evaluated  instead only that specific instant is re-evaluated
        // where that particular state has been used. in this case, only button's value is re-evaluated
    }

    return (
        <li>
            <Card className="expense-item">
                {/* this classname wont get added to the card element because HTML adds these attrs only to default element.
                    if we want to add a class to this custom element we'll need to tweak the code a little bit in Card.js */}
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">₹{props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    )

}
export default ExpenseItem;