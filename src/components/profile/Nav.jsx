import { useAuth } from "@/components/hooks/use-auth";
import logo from "@/assets/images/logo6pm.png";
import "@/components/profile/Profile.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeUser } from "../store/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(false);
  const { displayName } = useAuth();
  const navigate = useNavigate();
  const { shoppingBagData } = useSelector((state) => state.productList);
  const refreshPage = () => {
    navigate("/dashboard");
  };

  return (
    <div className='navBar'>
      <div onClick={refreshPage}>
        <img className='logoSmall' src={logo} alt='logo' />
      </div>

      <div>
        <p>$100+ receives free shipping</p>

        <span className='spanSignIn'>See Details</span>
      </div>
      <div>
        <p>1-888-676-2660</p>

        <span className='spanSignIn'>Live Chat</span>
      </div>
      <div className='navIcons'>
        <PersonOutlineOutlinedIcon
          sx={{ width: "35px", height: "35px", mr: "15px" }}
          onClick={() => setProfile(!profile)}
        />
        {profile && (
          <div className='navIconsDetails'>
            <p className='spanSignIn'>Hi {displayName}</p>
            <p className='spanSignIn' onClick={() => dispatch(removeUser())}>
              Log Out
            </p>
          </div>
        )}
        <ShoppingBagOutlinedIcon
          sx={{ width: "35px", height: "35px", cursor: "pointer" }}
          onClick={() => navigate("/shopping-bag")}
        />
        {shoppingBagData.length >= 1 ? <p>{shoppingBagData.length}</p> : null}
      </div>
    </div>
  );
}
