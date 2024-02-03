import { useForm } from "react-hook-form"
import FormInput from "./FormInput"
import { FormProvider } from "react-hook-form";
import FormButton from "./FormButton";
import { BIO_VALIDATION, EMAIL_OPTIONAL_VALIDATION, EMAIL_REQUIRED_VALIDATION, GRAD_YEAR_VALIDATION, NAME_VALIDATION } from "../utils/validationPresets";
import { CURRENT_YEAR } from "../utils/misc";
import { GroupedMultiselectDropdown } from "./MultiselectDropdown";
import { INTERESTS_OPTIONS } from "../utils/interestsData";

export default function UserProfileForm() {
    const methods = useForm();

    const onSubmit = methods.handleSubmit(
        (data) => {
            console.log(data);
        }
    )

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-5-desktop is-5-widescreen">
                    <h1 className="title">User Profile</h1>
                    <FormProvider {...methods}>
                        <form action=""
                            onSubmit={e => e.preventDefault()}
                            noValidate
                            className="container"
                        >
                            <div className="block my-6">
                                <h2 className="subtitle">Name</h2>
                                <div className="columns is-centered">
                                    <div className="column">
                                        <FormInput
                                            label="First"
                                            type="text"
                                            id="first-name-input"
                                            placeholder="Billy"
                                            validation={NAME_VALIDATION}
                                        />
                                    </div>
                                    <div className="column">
                                        <FormInput
                                            label="Last"
                                            type="text"
                                            id="last-name-input"
                                            placeholder="Bronco"
                                            validation={NAME_VALIDATION}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="block my-6">
                                <h2 className="subtitle">About you</h2>
                                <FormInput
                                    label="Bio"
                                    type="text"
                                    id="bio-input"
                                    placeholder="(Optional) Write a brief description of yourself."
                                    validation={BIO_VALIDATION}
                                />
                                <FormInput 
                                    label="Graduation Year"
                                    type="number"
                                    min={1949}
                                    max={CURRENT_YEAR + 12}
                                    defaultValue={CURRENT_YEAR}
                                    id="grad-year-input"
                                    placeholder="ex. 2027"
                                    validation={GRAD_YEAR_VALIDATION}
                                />

                                <GroupedMultiselectDropdown 
                                    label="Interests"
                                    options={INTERESTS_OPTIONS}
                                />
                            </div>

                            <div className="block my-6">
                                <h2 className="subtitle">Contact Info (Optional)</h2>
                                <div className="columns is-centered">
                                    <div className="column">
                                        <FormInput
                                            label="Instagram"
                                            type="text"
                                            id="instagram-username-input"
                                            placeholder="@calpolypomona"
                                            validation={BIO_VALIDATION}
                                        />
                                    </div>
                                    <div className="column">
                                        <FormInput
                                            label="Discord"
                                            type="text"
                                            id="discord-username-input"
                                            placeholder="billybronco49"
                                            validation={BIO_VALIDATION}
                                        />
                                    </div>
                                </div>
                                <FormInput 
                                    label="Email"
                                    type="email"
                                    id="email-input"
                                    placeholder="xyz@cpp.edu"
                                    validation={EMAIL_OPTIONAL_VALIDATION}
                                />
                            </div>

                           
                            <FormButton
                                text="Submit"
                                onClick={onSubmit}
                            />
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}