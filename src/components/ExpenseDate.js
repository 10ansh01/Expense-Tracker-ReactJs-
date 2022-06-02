import './css/ExpenseDate.css';

const ExpenseDate = props => {
    const currentMonth = props.date.toLocaleString('en-US', { month: 'long' });
    const currentDate = props.date.toLocaleString('en-US', { day: '2-digit' });
    const currentYear = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{currentMonth}</div>
            <div className="expense-date__year">{currentYear}</div>
            <div className="expense-date__day">{currentDate}</div>
        </div>
    );
}
export default ExpenseDate;
