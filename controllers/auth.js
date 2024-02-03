import { auth } from "../firebase"
import { GithubAuthProvider, GoogleAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth"


export function signInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider)
    .then(
        (result) => {
            console.log(result)
        }
    )
}

export function signInWithMicroSoft() {
    signInWithPopup(auth, new OAuthProvider("microsoft.com"))
    .then(
        (result) => {
            console.log(result)
        }
    )
}

export function signInWithGithub() {
    signInWithPopup(auth, new GithubAuthProvider)
    .then(
        (result) => {
            console.log(result)
        }
    )
}