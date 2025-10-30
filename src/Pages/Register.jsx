import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext)
  const [nameError, setNameError] = useState('')
  const navigate = useNavigate()
  
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character")
      return;
    } else {
      setNameError('')
    }
    const photo = form.photo.value;
    const password = form.password.value;
    //console.log(email, password, photo, name)
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoUrl: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoUrl: photo });
            navigate('/');
        })
          .catch((error) => {
            console.log(error)
          });
        //console.log(user)
      })
      .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />
            {
              nameError && <p className='text-xs text-error'>{ nameError}</p>
            }

            {/* Photo url */}
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              placeholder="Photo Url"
              name="photo"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />

            {/* Password */}
            <label className="label">Register</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p className="text-accent text-center pt-5">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;