import React from "react";

import "./Property.css";

const Property = () => {
  return (
    <div className="container">
      <label htmlFor="aos">Area of site</label>
      <input className="input-control" type="number" id="aos" />
    </div>
  );
};

export default Property;
