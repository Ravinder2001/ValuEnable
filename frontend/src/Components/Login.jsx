import { useState } from "react";
import "./Home.css";
const axios = require("axios");

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  function handleSubmit() {
    if (data.email) {
      axios
        .post("http://localhost:4000/", data)
        .then(function (response) {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "/allproduct";
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("email");
    }
  }
  return (
    <>
      <div className="admin-nav">
        <div
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Signin
        </div>
        <div style={{ background: "aqua" }}>Login</div>
      </div>
      <div className="sign-in-box">
        <div htmlFor="gmail">email</div>
        <input name="email" onChange={handleChange} id="gmail" type="email" />

        <div htmlFor="password">password</div>
        <input
          name="password"
          onChange={handleChange}
          id="password"
          type="password"
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
}
