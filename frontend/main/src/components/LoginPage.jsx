import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase"
import { useState } from "react";

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then( (userCredential) => {
            console.log(userCredential)
        })
    }
    
    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <h1 className="title">Student Login</h1>
                    <form onSubmit={login} className="box">
                        <div className="field">
                            <label htmlFor="" className="label">Email</label>
                            <div className="control">
                                <input 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" className="input" placeholder="bobsmith@example.com" required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="" className="label">Passsword</label>
                            <div className="control">
                                <input 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" placeholder="********" className="input" required/>
                            </div>
                        </div>

                        <button type="submit" className="button is-primary mr-5">Login</button>

                        {/* <button className="button is-secondary">Sign up</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}