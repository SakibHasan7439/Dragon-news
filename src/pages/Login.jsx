import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { userSignIn } = useContext(AuthContext);

    const handleUserSignIn = (e)=>{
      e.preventDefault();
      const form = new FormData(e.target);
      const email = form.get("email");
      const password = form.get("password");

      userSignIn(email, password)
      .then((userCredential)=>{
        console.log(userCredential.user);
      })
      .catch((err)=>{
        console.log("ERROR", err.message);
      })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="text-center lg:text-left">
        </div>
        <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleUserSignIn} className="card-body">
            <h2 className="text-black font-semibold text-center text-xl">Login Your account</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Login</button>
            </div>
          </form>
          <p className="text-center pb-4">
            Don&apos;t have an Account ? <Link to={"/auth/register"} className="text-red-600">Register</Link>
          </p>
        </div>
    </div>
  );
};

export default Login;
