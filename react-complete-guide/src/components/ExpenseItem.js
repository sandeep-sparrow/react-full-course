import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props){

    const expenseDate = props.expense.date;
    const expenseAmount = props.expense.amount;
    const expenseTitle = props.expense.title;

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>       
            <div className="extense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">${expenseAmount}</div>
        </Card>
    );

}

export default ExpenseItem;