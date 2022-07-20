import CustomInput from "../../UI/CustomInput";
import CustomButton from "../../UI/CustomButton";

const NewProductForm = () => {
    return (
        <form>
            <CustomInput label='Write new product here'/>
            <CustomButton>Submit</CustomButton>
        </form>
    )
}

export default NewProductForm;