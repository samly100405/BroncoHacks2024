import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"

function registerUser(email, password, displayName) {
    createUserWithEmailAndPassword(auth, email, password) 
    .then( (userCredential) => {
        // updateProfile(userCredential.user, {
        //     displayName: displayName,
        // })
        console.log(userCredential)
    })
}

function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then( (userCredential) => {
        console.log("signed in")
    })
}
export { registerUser, }