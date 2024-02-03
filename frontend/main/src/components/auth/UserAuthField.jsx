/* eslint-disable react/prop-types */
export default function UserAuthField(props) {
    return (
        <div className="field">
            <label htmlFor="" className="label">{props.label}</label>
            <div className="control">
                <input className="input"
                    type={props.type} 
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    required
                />
            </div>
        </div>
    )
}