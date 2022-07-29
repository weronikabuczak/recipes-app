import classes from './Footer.module.css';
import gitHub from '../../../assets/github.png';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <span>Recipes App 2022</span>
            <a href='https://github.com/weronikakurczyna'><img src={gitHub} alt='GitHub profile'/></a>
        </footer>
    )
}

export default Footer;