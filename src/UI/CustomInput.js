import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <input ref={ref} {...props.input} {...props} />
        </div>
    )
});

export default CustomInput;