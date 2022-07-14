import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <input placeholder={props.label} ref={ref} {...props.input}/>
        </div>
    )
});

export default CustomInput;