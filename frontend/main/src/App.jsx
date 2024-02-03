import SignInPage from "./components/auth/SignInPage";
import SignUpPage from "./components/auth/SignupPage";

export default function App() {
  return(
    <div className="app">
      <SignInPage />
      <SignUpPage />
    </div>
  )
}