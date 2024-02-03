import SignInWithOAuthProviderButton from "../../../components/SignInWithOAuthProviderButton"


export default function SignInPage() {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <SignInForm />
            </div>
        </section>
    )
}


function SignInForm() {
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
