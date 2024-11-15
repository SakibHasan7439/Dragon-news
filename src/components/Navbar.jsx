import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleUserSignOut = () =>{
      logOut()
      .then(()=>{
        alert("successfully signed out");
      })
      .catch((err)=>{
        console.log("ERROR", err.message);
      })
  }

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        {
          user && user.email ? <button onClick={handleUserSignOut} className="btn btn-neutral rounded-none">Sign out</button>
          : <Link to={"/auth/login"} className="btn btn-neutral rounded-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
