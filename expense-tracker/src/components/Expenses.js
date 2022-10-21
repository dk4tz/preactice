import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    const items = props.items;
    const expenses = []

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
            {expenses}
        </div>
    )
}

export default Expenses