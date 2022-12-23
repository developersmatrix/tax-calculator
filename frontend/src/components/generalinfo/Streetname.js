import React from "react";
import "./Streetname.css";

const Streetname = () => {
  return (
    <div className="street">
      <label for="street-select">Street</label>
      <select className="street-select" id="street-select">
        <option value="select">select</option>
        <option value="harikeri">harikeri</option>
        <option value="siddapur">siddapur</option>
      </select>
    </div>
  );
};

export default Streetname;
