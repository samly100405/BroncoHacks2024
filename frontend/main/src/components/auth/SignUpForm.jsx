import { useState } from "react";
import UserAuthField from "./UserAuthField";
import { registerUserWithEmailAndPassword } from "../../../../../controllers/main/auth";

export default function SignUpForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
  

    function submit(e) {
        e.preventDefault();
        
        registerUserWithEmailAndPassword(email, password, displayName)
    }

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <h1 className="title">Create Student Account</h1>
                    <form className="box">
                        <UserAuthField 
                            type="text"
                            label="Name"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                            placeholder="Bob Smith"
                            required
                        />
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
                        <button type="button" onClick={submit} className="button is-primary mr-5">Create User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}