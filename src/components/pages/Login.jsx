import logo from "@/assets/images/logo6pm.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "@/components/login/LoginPage.css";
import LoginForm from "@/components/login/LoginForm";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='loginPage'>
      <img className='logo' src={logo} alt='logo' />

      <div className='loginForm'>
        <h2>Sign-In</h2>
        <LoginForm />

        <Button
          variant='outlined'
          sx={{
            height: "45px",
            color: "#b12c35",
            border: "1.5px solid #b12c35",
          }}
          onClick={() => navigate("/registration")}
        >
          Create your 6pm account
        </Button>
      </div>
    </div>
  );
}
