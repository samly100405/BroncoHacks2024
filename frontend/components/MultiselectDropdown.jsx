import Multiselect from "multiselect-react-dropdown";
import { useFormContext } from "react-hook-form"

export function GroupedMultiselectDropdown(props) {
    const { setValue } = useFormContext();

    const handleChange = (e) => {
        setValue("Interests.0",
        e.map(
            (elem) => elem.key
        ));
    }

    return (
        <div className="field mt-4">
            <label htmlFor={props.id} className="label">{props.label}</label>

            <div className="control">
                <Multiselect
                    displayValue="key"
                    groupBy="cat"
                    onRemove={handleChange}
                    onSelect={handleChange}
                    onKeyPressFn={function noRefCheck(){}}
                    onSearch={function noRefCheck(){}}
                    options={props.options}
                />
            </div>
        </div>
    )
}