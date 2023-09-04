import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, {useState} from 'react';
import "./Expenses.css";

function Expenses(props){

    const[filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        console.log("Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredItems = props.items.filter(expense => { 
        return expense.date.getFullYear().toString() == filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            {filteredItems.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />)
            )}
            {/* 
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />
            <ExpenseItem expense={props.expenses[3]} />
            <ExpenseItem expense={props.expenses[4]} /> 
            */}
        </Card>
    )
}

export default Expenses;