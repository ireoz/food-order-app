import classes from './Form.module.css'
import Button from './Button';
import btnClasses from './Button.module.css'


const Form = (props)  => {

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.captureMealCartData(event.target[0].value, event.target[1].value);
    }
    return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
    <input readOnly id='mealID' hidden value={props.mealID}/>
    <label htmlFor='amount'>Amount</label>
    <input id='amount' type='number' className={classes.form_input}/>
    <div>
    <Button className={`${btnClasses.button} ${btnClasses.button_primary}`}  type='submit'>Add</Button>
    </div>
</form>
 );
}

export default Form