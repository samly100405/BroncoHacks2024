export default function FormButton(props) {
    return (
        <div className="field">
            <div className="control">
                <button className="button is-primary" onClick={props.onClick}>
                    {props.text}
                </button>
            </div>
        </div>
    )
}