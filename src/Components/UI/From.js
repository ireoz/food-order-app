import classes from './Form.module.css'
import Button from './Button';
import btnClasses from './Button.module.css'

const Form = (props)  => {
 return (
    <form className={classes.form}>
    <label hidden>{props.mealID}</label>
    <label htmlFor='amount'>Amount</label>
    <input id='amount' type='number' className={classes.form_input}/>
    <div>
    <Button className={`${btnClasses.button} ${btnClasses.button_primary}`} type='submit'>Add</Button>
    </div>
</form>
 );
}

export default Form