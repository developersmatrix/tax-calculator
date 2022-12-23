import React from "react";
import "./Streetname.css";

import { useSelector, useDispatch } from "react-redux";
import { streetsActions } from "../../store";

const Streetname = () => {
  const dispatch = useDispatch();
  const streetNames = useSelector((state) => state.streets.streetList);

  const streetSelected = (event) => {
    dispatch(streetsActions.setStreet(event.target.value));
  };

  const streets = streetNames.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });

  return (
    <div className="street">
      <label htmlFor="street-select">Street</label>
      <select
        className="street-select"
        id="street-select"
        onChange={streetSelected}
      >
        <option value="select">select</option>
        {streets}
      </select>
    </div>
  );
};

export default Streetname;
