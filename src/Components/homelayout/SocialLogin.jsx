import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { setUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const handleGoogleSignin = (e) => {
    e.preventDefault();

    signInWithGithub()
      .then((res) => {
      
        toast("Google sign-in successful!");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleGithubSignin = (e) => {
    e.preventDefault();
    signInWithGithub()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast("GitHub Signin Coming Soon...");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleSignin}
          className="btn w-full btn-outline btn-secondary"
        >
          <FcGoogle size={24} /> Login With Google
        </button>
        <button
          onClick={handleGithubSignin}
          className="btn w-full btn-outline btn-primary"
        >
          <FaGithub size={24} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
