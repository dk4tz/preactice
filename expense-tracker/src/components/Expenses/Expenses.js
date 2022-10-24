import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

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
        <Card>
            {expenses}
        </Card>
    )
}

export default Expenses