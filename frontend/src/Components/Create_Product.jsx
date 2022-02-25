import "./Home.css";
import { useState } from "react";
const axios = require("axios");

export default function Create_Product() {
   // const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState({
    name: "",
    price: 0,
    img: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  function handleSubmit() {
    function checkImage(url) {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.send();
      request.onload = function () {
        if (request.status === 200) {
          axios
            .post("http://localhost:4000/product", data)
            .then(function (response) {
              console.log(response);
              window.location.href = "/allproduct";
            })
            .catch(function (error) {
              console.log(error);
            });
          console.log("image exists");
        } else {
          alert("image not valid");
          console.log("image doesn't exist");
        }
      };
    }
    checkImage(data.img);
  }
  return (
    <>
      <div className="admin-nav">
        <div style={{ background: "aqua" }}>Add Product</div>
        <div
          onClick={() => {
            window.location.href = "/allproduct";
          }}
        >
          All Product
        </div>
        <div
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Logout
        </div>
      </div>
      <div className="sign-in-box">
        <div htmlFor="name">name</div>
        <input onChange={handleChange} name="name" id="name" type="text" />
        <div htmlFor="Price">Price</div>
        <input onChange={handleChange} name="price" id="Price" type="Number" />
        <div htmlFor="img">Image Link</div>
        <input onChange={handleChange} name="img" id="img" type="text" />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
}
