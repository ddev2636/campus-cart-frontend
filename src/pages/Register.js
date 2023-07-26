import React from "react";
import Wrapper from "../assets/wrappers/Register-login";
import { useState, useEffect } from "react";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { useAppContext } from "../context/appContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert } from "../components/index.js";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [rightPanel, setRightPanel] = useState(false);
  const [values, setValues] = useState(initialState);

  const { user, registerUser, loginUser, displayAlert, showAlert } =
    useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    //console.log(values);

    if (!email || !password || (rightPanel && !name)) {
      displayAlert();
    }

    const currentUser = { name, email, password };
    if (rightPanel) {
      registerUser(currentUser);
    } else {
      loginUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);
  return (
    <Wrapper>
      <div className="login-register-container">
        <div
          className={rightPanel ? "container right-panel-active" : "container"}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form>
              {/* <form action="/startup/create-session" method="POST"> */}
              {showAlert ? (
                <div>
                  <Alert />
                </div>
              ) : (
                []
              )}
              <h1>Register</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <CiFacebook style={{ fontSize: "2rem" }} />
                </a>
                <a href="#" className="social">
                  <AiOutlineInstagram style={{ fontSize: "2rem" }} />
                </a>
                <a href="#" className="social">
                  <CiTwitter style={{ fontSize: "2rem" }} />
                </a>
              </div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <br />
              <button
                style={{ backgroundColor: "#4e54c8" }}
                type="submit"
                onClick={onSubmit}
              >
                Register
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              {showAlert ? (
                <div>
                  <Alert />
                </div>
              ) : (
                []
              )}
              <h1>Sign In</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <CiFacebook style={{ fontSize: "2rem" }} />
                </a>
                <a href="#" className="social">
                  <AiOutlineInstagram style={{ fontSize: "2rem" }} />
                </a>
                <a href="#" className="social">
                  <CiTwitter style={{ fontSize: "2rem" }} />
                </a>
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <a href="#">Forgot your password?</a>
              <button
                type="submit"
                style={{ backgroundColor: "#4e54c8" }}
                onClick={onSubmit}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Already have Account!</h1>
                <p>Sign In here</p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => setRightPanel(false)}
                >
                  Sign In
                </button>

                <Link to="/landing">
                  <button
                    className="ghost"
                    style={{ marginTop: "20px" }}
                    value="none"
                  >
                    Back to Home
                  </button>
                </Link>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Don't Have Account</h1>
                <p>Register First</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setRightPanel(true)}
                >
                  Register
                </button>
                <Link to="/landing">
                  <button
                    className="ghost"
                    style={{ marginTop: "20px" }}
                    value="none"
                  >
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
