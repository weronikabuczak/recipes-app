import classes from './NewRecipe.module.css';
import CustomInput from "../../../UI/CustomInput";

const NewRecipe = () => {
    return (
        <section className={classes.card}>
            <h1>Here you can add your own recipe</h1>
            <form className={classes.form}>
                <div>
                    <CustomInput label="Name" required type="text" maxLength='30'/>
                </div>
                <div>
                    <CustomInput label="Short description" required type="text" maxLength='50'/>
                </div>
                <div className={classes['select__container']}>
                    <select className={classes.select}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <CustomInput label="Time" required type="text" maxLength='50'/>
                </div>
                <div>
                    <label>Preparation</label>
                    <input/>
                </div>
                <div>
                    <label>Image</label>
                    <input/>
                </div>
                <div>
                    <label>Ingredients</label>
                    <input/>
                </div>
            </form>
        </section>
    )
}

export default NewRecipe;