import React from "react";

export default function FAQ(props) {

  return (
    <form style={{display: props.display === "block" ? "block" : "none"}} className="FAQ">
      <h2 className="content-heading text-primary">FAQ Section</h2>
      <br />
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <br />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Enter your Question</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button id="hoverme"
        style={{
          backgroundColor: props.theme === "light" ? "#4d79ff" : "#00004d",
        }}
        className="FAQ-button"
      >
        Submit
      </button>
    </form>
  );
}
