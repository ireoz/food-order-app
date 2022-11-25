import classes from './Form.module.css'
import Button from './Button';
import btnClasses from './Button.module.css'
import { useEffect, useRef, useState } from 'react';


const Form = (props)  => {
    const [isValid, setIsValid] = useState(true);
   const amountInputReference = useRef(null);

   useEffect(() => {
    !isValid && amountInputReference.current.focus();
}, [isValid])

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(event.target[1].value === '') {
          setIsValid(false);  
        return
    }
        props.captureMealCartData(event.target[0].value, event.target[1].value);
        setIsValid(true);
    }

    const amountEnteredHandler = (event) => {
        setIsValid(true)
    }

    return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
    <input readOnly id='mealID' hidden value={props.mealID}/>
    <label htmlFor='amount'>Quantity</label>
    <input 
    id='amount' 
    type='number' 
    min="1" 
    max="5" 
    className={`${classes.form_input} 
    ${!isValid && classes.form_input_inValid}`}
    onChange={amountEnteredHandler}
    ref={amountInputReference}/>
    <div>
    <Button 
    className={`${btnClasses.button} 
    ${btnClasses.button_primary}
    ${!isValid && btnClasses.button_disabled}`}
    disabled = {!isValid && true}
    
    type='submit'>Add</Button>
    </div>
</form>
 );
}

export default Form