import './css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {


    if (props.items.length === 0) {
        return (
            <p className="expenses-list__fallback">No Expense to display!</p>
        )
    }
    return (
        <ul className="expenses-list">
            {props.items.map(
                item => <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />)}
        </ul>
    )
}

export default ExpensesList;