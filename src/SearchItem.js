import React, { useState } from "react";
import Api from "./Api";
import Card from "./Card";

var Searchitem = (props) => {
  var [getIndex, setindex] = useState();
  var checking = Api.map((value) => {
    return value.title.search(props.input_value.toUpperCase()) >= 0 ||
      value.text.search(props.input_value) >= 0
      ? true
      : false;
  });

  console.log("Result", checking);

  return (
    <>
      <center>
        <h2 style={{ marginTop: "50px" }}>Search Results</h2>
      </center>
      <hr></hr>
      <div className="search_items">
        {checking.map((value, index) => {
          return value ? (
            <Card title={Api[index].title} text={Api[index].text} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default Searchitem;
