export default function LoginPage() {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <Login />
            </div>
        </section>
    )
}

function Login() {
    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <h1 className="title">Student Login</h1>
                    <form action="" className="box">
                        <div className="field">
                            <label htmlFor="" className="label">Email</label>
                            <div className="control">
                                <input type="email" className="input" placeholder="bobsmith@example.com" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="" className="label">Passsword</label>
                            <div className="control">
                                <input type="password" placeholder="********" className="input" required/>
                            </div>
                        </div>

                        <button className="button is-primary mr-5">Login</button>

                        <button className="button is-secondary">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}