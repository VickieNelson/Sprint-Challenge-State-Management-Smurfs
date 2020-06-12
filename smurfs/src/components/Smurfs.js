import React, { useContext, createFactory } from "react";
import SmurfsContext from "../contexts/SmurfsContext";
import SingleSmurf from "./SingleSmurf";

const Smurfs = () => {
  const { smurfs } = useContext(SmurfsContext);
  console.log("comp", smurfs);
  return (
    <div>
      <div>
        <h2>Smurf Village</h2>
      </div>
      <div className='smurfCardDisplay'>
        {smurfs.map((smurf) => (
          <SingleSmurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

export default Smurfs;
