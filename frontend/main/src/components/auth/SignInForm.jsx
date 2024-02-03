import { useState } from "react";
import UserAuthField from "./UserAuthField";

export default function SignInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <h1 className="title">Student Sign In</h1>
                    <form className="box">
                        <UserAuthField
                            type="email"
                            label="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="asdf@example.com"
                            required
                        />
                        <UserAuthField
                            type="password"
                            label="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="********"
                            required
                        />
                        <button type="button" onClick={submit} className="button is-primary mr-5">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}