import React, { useState, useEffect } from "react";
import { useLocation, Redirect, Link } from "react-router-dom";
import emailjs from "emailjs-com";
import logo from "../assets/logo-purple-shadow.png";
import "../App.css";
import "./Contact.css";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Getting stylist name
  const location = useLocation()
  if (!location.state) {
    return (<Redirect to="/404" />)
  }
  const { stylist } = location.state

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true);

    if ((name === "") || (email === "") || (type === "") || (type === "null") || (description === "")) {
      alert("Please complete the entire form!");
      return;
    }

    // Send 2 emails: 
    // 1 for client confirmation, 1 for stylist order information
    // // comment out for testing - don't want to use your quota lol
    // emailjs.sendForm('gmail', 'client-v1', e.target, 'user_QTkd3gkjZIGVN1BDdPHQA')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    // notify stylists
    if (stylist == "Chris") {
      emailjs.sendForm('gmail', 'stylist-chris', e.target, 'user_QTkd3gkjZIGVN1BDdPHQA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } else if (stylist == "Marley") {
      emailjs.sendForm('gmail', 'stylist-marley', e.target, 'user_QTkd3gkjZIGVN1BDdPHQA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } else if (stylist == "Shelby") {
      emailjs.sendForm('gmail', 'stylist-shelby', e.target, 'user_QTkd3gkjZIGVN1BDdPHQA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } else if (stylist == "Hayley") {
      emailjs.sendForm('gmail', 'stylist-hayley', e.target, 'user_QTkd3gkjZIGVN1BDdPHQA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    // notify hudson
    // emailjs.sendForm('gmail', 'notify-hudson', e.target, 'user_QTkd3gkjZIGVN1BDdPHQA')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    // add to firebase DB
    // db.collection("requests")
    //   .add({
    //     name: name,
    //     email: email,
    //     type: type,
    //     desc: description
    //     stylist: stylist
    //   })
    //   .then(() => {
    //     setLoader(false);
    //     alert("Your message has been submitted👍"); DELETE?
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });
  

    // setName("");
    // setEmail("");
    // setDescription("");
    // e.target.reset();

    setSubmitted(true);

  };

  return (
    <div className="app">
      <div className="logo-row">
        <Link to="/">
            <img className="logo" src={logo}/>
        </Link>
      </div>
      <hr className="bottom-line"/>
      <div className="back-section">
          <Link className="back-button" to="/stylists" style={{ textDecoration: 'none' }}>
            ↜ Back to stylists
          </Link>
      </div>
      <div className="wrapper-contact">
        <form className="form" onSubmit={handleSubmit}>
        
          <h1>Request {stylist}!</h1>

          <label>Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email*</label>
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label> Pick your service type* </label>
          <select 
              name="type"
              placeholder="Select a Service"
              onChange={(e) => setType(e.target.value)}
          >
              <option className="select-option" value="null"></option>
              <option className="select-option" value="Mix and Match">Mix and Match - $5 USD</option>
              <option className="select-option" value="Select for Me">Select for Me - $10 USD</option>
              <option className="select-option" value="30-min 1:1 Call">1:1 Call - $20 USD</option>
          </select>
          

          <label>Request Description*</label>
          <textarea
            placeholder="Tell us more about what you're looking for e.g. 2 button down shirts"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="info">
            You will receive an email confirmation of your request immediately. An invoice will be emailed soon, and {stylist} will reach out to you within 2 business days!
          </div>
          <button
            type="submit"
            style={{ background: loader ? "#afafaf" : "#ea80fc" }}
          >
            Submit request
          </button>
        </form>
      </div>
      <hr className="bottom-line"/>
        <div className="back-section">
          <Link className="back-button" to="/stylists" style={{ textDecoration: 'none' }}>
            ↜ Back to stylists
          </Link>
        </div>
      
      {submitted && <Redirect to={{
        pathname: "/confirm",
        state: { email: email }
        }}
      />}
    </div>
  );
};

export default Contact;