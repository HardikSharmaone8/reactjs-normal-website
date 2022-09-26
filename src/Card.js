import React from "react";

var Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/450/250"
          className="card-img-top"
          alt="Services"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
