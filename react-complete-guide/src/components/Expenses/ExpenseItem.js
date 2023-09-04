import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){

    // const [expenseTitle, setExpenseTitle] = useState(props.title);

    const expenseDate = props.expense.date;
    let expenseAmount = props.expense.amount;
    let expenseTitle = props.expense.title;

    // const clickHandler = () => {
    //     setExpenseTitle(expenseTitle + ' Updated!');
    //     console.log("Expense Title is Updated!");
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>       
            <div className="extense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">${expenseAmount}</div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );

}

export default ExpenseItem;