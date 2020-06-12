import React, { useContext, createFactory } from "react";
import SmurfsContext from "../contexts/SmurfsContext";
import SingleSmurf from "./SingleSmurf";

const Smurfs = () => {
  const { smurfs } = useContext(SmurfsContext);
  console.log("comp", smurfs);
  return (
    <div>
      <div>
        <h1>The Smurf Village</h1>
      </div>
      <div>
        {smurfs.map((smurf) => (
          <SingleSmurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

export default Smurfs;
