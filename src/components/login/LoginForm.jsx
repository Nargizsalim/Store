import Form from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "@/components/login/LoginPage.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slice/userSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password, displayName) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password, displayName)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            displayName: user.displayName,
          })
        );
        navigate("/dashboard");
      })
      .catch(() => alert("Invalid user!"));
  };
  return <Form title='Sign In' handleClick={handleLogin} />;
}
