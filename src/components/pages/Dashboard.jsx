import Nav from "@/components/profile/Nav";
import { useAuth } from "@/components/hooks/use-auth";
import { useNavigate } from "react-router-dom";
import TabsNav from "@/components/profile/TabsNav";
import Cards from "@/components/profile/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplayData } from "@/components/store/slice/productListSlice";
export default function Dashboard() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDisplayData("All"));
  }, []);

  return isAuth ? (
    <>
      <Nav />
      <TabsNav />
      <Cards />
    </>
  ) : (
    navigate("/")
  );
}
