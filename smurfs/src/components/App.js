//import deps
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

//components
import SmurfsContext from "../contexts/SmurfsContext";
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";
import "./App.css";

var imageName = require("../images/smurfsimage.jpg");

export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res.data);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.error("server error", err);
      });
  }, []);

  const addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log("post res", res);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log("smurfs", smurfs);

  return (
    <div className='App'>
      <SmurfsContext.Provider value={{ smurfs }}>
        <img src={imageName} />
        <h1>Welcome to Smurf Town</h1>

        <div className='image-box'></div>
        <Smurfs />

        <AddSmurf addSmurf={addSmurf} />
      </SmurfsContext.Provider>
      <section>
        <div className='image-botom'></div>
      </section>
    </div>
  );
}
