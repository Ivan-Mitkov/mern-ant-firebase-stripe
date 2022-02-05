import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

//https://firebase.google.com/docs/auth/web/password-auth#web-version-9_1
const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);

    window.localStorage.setItem("emailForSignIn", email);

    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );

    setEmail("");
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder="email"
        />

        <button className="btn btn-primary mt-2" type="submit">
          Register
        </button>
      </form>
    );
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-6">
          <h4>Register</h4>
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
