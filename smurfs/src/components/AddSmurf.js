import React, { useState } from "react";
import "./AddSmurf.css";
var imageName = require("../images/smurfsimage.jpg");

export default function AddSmurf(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div className='smurf-card'>
      <h1> Create a Smurf!</h1>
      <div className='InputBoxes'>
        <input
          type='text'
          name='name'
          value={newSmurf.name}
          onChange={handleChanges}
          placeholder='  Name'
        />
        <input
          type='text'
          name='age'
          value={newSmurf.age}
          onChange={handleChanges}
          placeholder='  Age'
        />
        <input
          type='text'
          name='height'
          value={newSmurf.height}
          onChange={handleChanges}
          placeholder='  Height'
        />
      </div>
      <span>
        <button className='button' onClick={handleSubmit}>
          Add Smurf
        </button>
      </span>

      <img src={imageName} className='footerImage' />
    </div>
  );
}
