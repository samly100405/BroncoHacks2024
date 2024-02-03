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
                    <form action={submit} className="box">
                        <UserAuthField
                            type="email"
                            label="Email"
                            value={email}
                            onChange={setEmail}
                            placeholder="asdf@example.com"
                            required
                        />
                        <UserAuthField
                            type="password"
                            label="Password"
                            value={password}
                            onChange={setPassword}
                            placeholder="********"
                            required
                        />
                        <button type="submit" className="button is-primary mr-5">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}