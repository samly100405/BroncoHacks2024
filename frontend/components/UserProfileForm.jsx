import { useForm } from "react-hook-form"
import FormInput from "./FormInput"
import { FormProvider } from "react-hook-form";
import FormButton from "./FormButton";

export default function UserProfileForm() {
    const methods = useForm();

    const onSubmit = methods.handleSubmit(
        (data) => {
            console.log(data);
        }
    )

    return (
        <FormProvider {...methods}>
            <form action=""
                onSubmit={e => e.preventDefault()}
                noValidate
                className="container"
            >
                
                <FormInput
                    label="Full Name"
                    type="text"
                    id="name-input"
                    placeholder="ex. Bob Smith"
                />
                <FormInput
                    label="Student Email"
                    type="email"
                    id="student-email-input"
                    placeholder="xyz@cpp.edu"
                />

                <FormButton 
                    text="Submit"
                    onClick={onSubmit}
                />
            </form>
        </FormProvider>
    )
}