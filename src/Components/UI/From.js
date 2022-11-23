import classes from './Form.module.css'

const Form = ()  => {
 return (
    <form className={classes.form}>
    <label>Amount</label>
    <input type='text' className={classes.form_input}/>
    <div>
    <button>Add</button>
    </div>
</form>
 );
}

export default Form