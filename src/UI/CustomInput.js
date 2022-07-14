import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <input placeholder={props.label} type={props.type} required={props.required} id={props.id}
                   ref={ref} {...props.input}/>
        </div>
    )
});

export default CustomInput;