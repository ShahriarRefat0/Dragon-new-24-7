import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error , setError] = useState('')
  const { logIn } = use(AuthContext);
  const location = useLocation()
  const navigate =useNavigate()
  //console.log(location)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        alert("login Successful");
             navigate(`${location.state ? location.state : "/"}`);
      })
          .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
            setError(error.code)
       
      });
    };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-red-400 text-xm">{ error}</p>
            }
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-accent text-center pt-5">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
