import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
});

export default CustomInput;