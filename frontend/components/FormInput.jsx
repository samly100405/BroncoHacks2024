import { useFormContext } from "react-hook-form"
import { findInputError } from "../utils/findInputError"
import { isFormInvalid } from "../utils/isFormInvalid";

export default function FormInput(props) {
    const { register, formState: { errors} } = useFormContext();

    const inputError = findInputError(errors, props.label);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className="field">
            <div className="columns is-mobile">
                <div className="column is-narrow">
                    <label htmlFor={props.id} className="label">{props.label}</label>
                </div>

                <div className="column">
                    {isInvalid && (
                        <FormInputError
                            message={inputError.error.message}
                            key={inputError.error.message}
                        />
                    )}
                </div>
            </div>
            <div className="control has-background-warning">
                <input 
                    id={props.id} 
                    type={props.type} 
                    placeholder={props.placeholder}
                    className="input"
                    {...register(props.label, {
                        required: {
                          value: true,
                          message: '*required',
                        },
                    })}
                />
            </div>
        </div>
    )
}

function FormInputError(props) {
    return (
        <span className="has-text-danger">
            {props.message}
        </span>
    )
}