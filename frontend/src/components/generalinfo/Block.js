import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { blockActions } from "../../store";

import { blockNumbers } from "../../store/blocks";
import "./Block.css";

const Block = () => {
  const dispatch = useDispatch();
  const block = useSelector((state) => state.block);

  const selectedBlock = (event) => {
    dispatch(blockActions.setBlock(event.target.value));
  };
  const blocks = blockNumbers.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });

  return (
    <div className="block">
      <label htmlFor="block-select">Block</label>
      <select
        className="block-select"
        value={block}
        onChange={selectedBlock}
        id="block-select"
      >
        <option value=" ">select</option>
        {blocks}
      </select>
    </div>
  );
};

export default Block;
