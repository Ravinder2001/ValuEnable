import "./Home.css";
import { useState } from "react";

const axios = require("axios");
export default function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "costumer",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  function handleSubmit() {
    if (data.email) {
      axios
        .post("http://localhost:4000/user", data)
        .then(function (response) {
          console.log(response);
          window.location.href = "/login";
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
        <div style={{ background: "aqua" }}>Signin</div>
        <div
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Login
        </div>
      </div>
      <div className="sign-in-box">
        <div htmlFor="name">name</div>
        <input name="name" onChange={handleChange} id="name" type="text" />

        <div htmlFor="gmail">email</div>
        <input name="email" onChange={handleChange} id="gmail" type="email" />

        <div htmlFor="password">password</div>
        <input
          name="password"
          onChange={handleChange}
          id="password"
          type="password"
        />

        <div htmlFor="role">Role</div>

        <select name="role" onChange={handleChange} id="role">
          <option value="costumer">costumer</option>
          <option value="admin">admin</option>
        </select>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
}
