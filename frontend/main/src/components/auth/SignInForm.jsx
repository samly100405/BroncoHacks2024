/* eslint-disable react/prop-types */
import SignInWithOAuthProviderButton from "../../../../components/SignInWithOAuthProviderButton"

export default function SignUpForm() {
    return (
        <div className="container">
            <div className="columns is-mobile is-centered">
                <div className="box has-text-centered">
                    <div className="column">
                        <h1 className="title">Student Sign In</h1>
                        <h2 className="subtitle">Please select one of the following providers.</h2>
                        <SignInWithOAuthProviderButton provider="Microsoft" />
                        <SignInWithOAuthProviderButton provider="Google" />
                        <SignInWithOAuthProviderButton provider="Github" />
                    </div>
                </div>
            </div>
        </div>
    )
}
