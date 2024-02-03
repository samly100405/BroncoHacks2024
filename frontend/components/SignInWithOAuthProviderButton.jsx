import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signInWithGithub, signInWithGoogle, signInWithMicroSoft } from "../../controllers/auth"

export default function SignInWithOAuthProviderButton(props) {
    let icon = "";
    let signIn;
    let provider = props.provider;

    switch (provider.toLowerCase()) {
        case "microsoft":
            icon = "microsoft";
            signIn = signInWithMicroSoft;
            break;
        case "google":
            icon = "google";
            signIn = signInWithGoogle;
            break;
        case "github":
            icon = "github";
            signIn = signInWithGithub;
            break;
        default:
            console.log(provider.toLowerCase() + " is not available")
    }
    return (
        <div className="field">
            <div className="control ">
                <button className="button" onClick={(e) => signIn(e)}>
                <FontAwesomeIcon icon={"fa-brands fa-" + icon} className="mr-2"/>
                    Sign In With {provider}
                </button>
                {/* Trust bro it works */}
            </div>
        </div>
    )
}