import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/auth/SignupPage";

export default function App() {
  return(
    <div className="app">
      <LoginPage />
      <SignUpPage />
    </div>
  )
}