import "./Home.css";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
const axios = require("axios");

export default function Product() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:4000/product")
        .then(function (response) {
          console.log(response);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);
  console.log(user[0].role)
  return (
    <>
      <div className="admin-nav">
        <div
          style={{ display: user[0].role === "admin" ? "flex" : "none" }}
          onClick={() => {
            window.location.href = "/createproduct";
          }}
        >
          Add Product
        </div>
        <div style={{ background: "aqua" }}>All Product</div>
        <div
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          {(user[0].name).split(" ")[0]}
        </div>
      </div>
      {data.map((e, id) => (
        <div key={id} className="product-list">
          <AiFillDelete
            style={{ display: user[0].role === "admin" ? "flex" : "none" }}
            id="icon"
            onClick={() => {
              axios
                .delete(`http://localhost:4000/product?id=${e._id}`)
                .then(function (response) {
                  console.log(response);
                  setData(response.data);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          />
          {console.log(data)}
          <p>
            {" "}
            <img src={e.img ? e.img : ""} alt="" />
          </p>

          <div>{e.name}</div>
          <div>{e.price}</div>
        </div>
      ))}
    </>
  );
}
