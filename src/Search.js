import React, { useState } from "react";
import Api from "./Api";
import SearchItem from "./SearchItem";

var Search = () => {
  var [demoInputItem, setdemoInputItem] = useState();
  var [inputItem, setinputItem] = useState("Demo");

  var inputEvent = (event) => {
    var value = event.target.value;
    setdemoInputItem(value);
  };
  var submit = (event) => {
    setinputItem(demoInputItem);
  };
  return (
    <>
      <div className="searchDiv">
        <h2 style={{ marginLeft: "120px" }}>Search</h2>
        <input
          type="text"
          placeholder="Search Anyting"
          className="search-input"
          value={demoInputItem}
          onChange={inputEvent}
        ></input>
        <button onClick={submit}>Search</button>
      </div>
      <SearchItem input_value={inputItem} />
    </>
  );
};

export default Search;
