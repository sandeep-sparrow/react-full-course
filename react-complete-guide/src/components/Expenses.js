import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

function Expenses(props){

    return (
        <div>
            <ExpenseItem expense={props.expenses[0]}/>
            <ExpenseItem expense={props.expenses[1]}/>
            <ExpenseItem expense={props.expenses[2]}/>
            <ExpenseItem expense={props.expenses[3]}/>
            <ExpenseItem expense={props.expenses[4]}/>
        </div>
    )
}

export default Expenses;