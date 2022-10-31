import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2022');
    const items = props.items;
    const expenses = [];

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    items.forEach(item => expenses.push(
        <ExpenseItem
            key={item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date}
        />
    ))
    return(
        <div>
            <Card>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenses}
            </Card>
        </div>
    )
}

export default Expenses