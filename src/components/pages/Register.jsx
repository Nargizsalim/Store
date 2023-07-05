import RegistrationForm from "../login/RegistrationForm";
import logo from "../../assets/images/logo6pm.png";
import { useNavigate } from 'react-router-dom';
import "@/components/login/LoginPage.css";


export default function Register() {
    const navigate = useNavigate()
    return (
        <div className="loginPage">
        <img className="logo" src={logo} alt="logo" />
          <div className="loginForm">
              <h2>Create account</h2>
                <RegistrationForm />
                <p>Already have an account? <span className='spanSignIn' onClick={()=>navigate("/")}> Sign in </span></p>
              
              </div>
              </div>
  )
}
