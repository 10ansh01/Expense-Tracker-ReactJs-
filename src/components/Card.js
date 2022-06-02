import React from 'react'
import './css/Card.css'

const Card = props => {
    const classes = "card " + props.className;
    //we can make <Card></Card> as a wrapper component by passing children prop inside of this component
    //you can see in ExpenseItem.js about how I am using card as a wrapper instead of div for other elements
    return (
        <div className={classes}>{props.children}</div>
    )
}
export default Card;
