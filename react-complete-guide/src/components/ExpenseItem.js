import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

    const expenseDate = props.expense.date;
    const expenseAmount = props.expense.amount;
    const expenseTitle = props.expense.title;

    return (
    <div className="expense-item">
        <ExpenseDate date={expenseDate}/>       
        <div className="extense-item__description">
            <h2>{expenseTitle}</h2>
        </div>
        <div className="expense-item__price">${expenseAmount}</div>
    </div>
    );

}

export default ExpenseItem;