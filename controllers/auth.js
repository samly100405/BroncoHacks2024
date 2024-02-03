import { auth } from "../firebase"
import { GithubAuthProvider, GoogleAuthProvider, OAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth"


export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider)
}

export function signInWithMicroSoft() {
    return signInWithPopup(auth, new OAuthProvider("microsoft.com"))
}

export function signInWithGithub() {
    return signInWithPopup(auth, new GithubAuthProvider)
}

export function getCurrentUser() {
    return auth.currentUser;
}

export function getAuthState(callback) {
    return onAuthStateChanged(auth, callback);
}