import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <input ref={ref} {...props} placeholder={props.label} />
        </div>
    )
});

export default CustomInput;