//create a new component that is responsible for displaying expenses
//add multiple ExpenseItem components in that component
//keep the expenses array in the App component and pass that data into Expenses component
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem 
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem 
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem 
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    );
}

export default Expenses;