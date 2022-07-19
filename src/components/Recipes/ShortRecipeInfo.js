import classes from './ShortRecipeInfo.module.css';
import clockIcon from '../../assets/clock-icon.png';
import diff1Icon from '../../assets/1diff.png';

const ShortRecipeInfo = () => {
    return (
        <div className={classes['shortInfo']}>
            <span><img src={clockIcon} alt='clock icon'/>1 hour</span>
            <span><img src={diff1Icon} alt='clock icon'/>EASY</span>
        </div>
    )
}

export default ShortRecipeInfo;