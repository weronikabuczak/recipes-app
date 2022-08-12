import classes from './NewRecipe.module.css';
import CustomButton from "../../../UI/CustomButton";
import CustomInput from "../../../UI/CustomInput";

const NewRecipe = () => {
    return (
        <section className={classes.card}>
            <h1>Here you can add your own recipe</h1>
            <form className={classes.form}>
                <div>
                    <CustomInput label="Name" required type="text" maxLength='30'/>
                    <label>Name</label>
                    <input type="text" maxLength='30'/>
                </div>
                <div>
                    <label>Short description</label>
                    <input type="text" maxLength='50'/>
                </div>
                <div>
                    <label>Difficulty</label>
                    <input/>
                </div>
                <div>
                    <label>Time</label>
                    <input/>
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