import React from "react";
import Api from "./Api";
import Card from "./Card";

var Services = () => {
  return (
    <>
      <center>
        <h3 style={{ marginTop: "50px" }}>Our Services</h3>
      </center>
      <div className="card_container">
        {Api.map((value, index) => {
          return <Card key={index} title={value.title} text={value.text} />;
        })}
      </div>
    </>
  );
};

export default Services;
