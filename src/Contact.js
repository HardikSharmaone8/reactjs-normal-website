import React, { useState } from "react";
import Menu from "./Menu";

var Contact = () => {
  var [inputText, setinputText] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
  });
  var inputEvent = (event) => {
    var val = event.target.value;
    var name = event.target.name;

    console.log(val);
    setinputText({
      ...inputText,
      [name]: val,
    });
  };

  var submit = () => {
    alert(
      `Your Full Name is ${inputText.fname} ${inputText.lname} and your Email address is ${inputText.email} with phone number ${inputText.phone} and your password is ${inputText.password} generated successfully`
    );
  };
  return (
    <>
      <div className="contact_container">
        <center>
          <h3>Contact Us</h3>
        </center>
        <div className="contact_form_container">
          <form onSubmit={submit}>
            <label>First Name: - </label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              onChange={inputEvent}
            ></input>
            <label>Last Name: - </label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              onChange={inputEvent}
            ></input>
            <label>Email: -</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputEvent}
            ></input>
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={inputEvent}
            ></input>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={inputEvent}
            ></input>
            <input type="submit" inputText="Submit" className="submit"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
