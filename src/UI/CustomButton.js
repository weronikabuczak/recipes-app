import classes from './CustomButton.module.css';

const CustomButton = (props) => {
    return (
        <button
            className=
                {`${classes['default-button']} 
                ${props.confirmation && classes.confirmation} 
                ${props.cancellation && classes.cancellation} 
                ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >{props.children}</button>
    )
}

export default CustomButton;