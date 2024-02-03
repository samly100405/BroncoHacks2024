import { useState } from "react";
import UserAuthField from "./UserAuthField";

export default function SingUpForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const submit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <h1 className="title">Create Student Account</h1>
                    <form action={submit} className="box">
                        <UserAuthField
                            type="text"
                            label="Name"
                            value={displayName}
                            onChange={setDisplayName}
                            placeholder="Bob Smith"
                            required
                        />
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
                        <button type="submit" className="button is-primary mr-5">Create User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}