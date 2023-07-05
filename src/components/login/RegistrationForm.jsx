import Form from "./Form";
import "@/components/login/LoginPage.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice/userSlice";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (email, password, displayName) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then(({ user }) => {
        updateProfile(user, { displayName: displayName });

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

      .catch(console.error);
  };
  return <Form title='Create your 6pm account' handleClick={handleRegister} />;
}
