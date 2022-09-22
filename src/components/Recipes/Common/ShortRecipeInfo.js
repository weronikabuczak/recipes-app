import classes from './ShortRecipeInfo.module.css';
import clockIcon from '../../../assets/clock-icon.png';
import diff1Icon from '../../../assets/1diff.png';
import diff2Icon from '../../../assets/2diff.png';
import diff3Icon from '../../../assets/3diff.png';

const ShortRecipeInfo = ({recipe}) => {
    let recipeIcon = diff1Icon;

    if (recipe.diff === 'Easy') {
        recipeIcon = diff1Icon;
    } else if (recipe.diff === 'Medium') {
        recipeIcon = diff2Icon;
    } else if (recipe.diff === 'Hard') {
        recipeIcon = diff3Icon;
    }

    return (
        <div className={classes['shortInfo']}>
            <span className={classes.feature}>
                <img src={clockIcon} alt='clock icon'/>
                {recipe.hours && <span>{recipe.hours}h </span>}
                {recipe.minutes && <span>{recipe.minutes}min </span>}
            </span>
            <span className={classes.feature}>
                <img src={recipeIcon} alt='level icon'/>{recipe.diff}
            </span>
        </div>
    )
}

export default ShortRecipeInfo;