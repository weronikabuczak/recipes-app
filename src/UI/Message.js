import classes from './Message.module.css';

const Message = (props) => {
    return (
        <p className={classes.message}>{props.children}</p>
    )
};

export default Message;