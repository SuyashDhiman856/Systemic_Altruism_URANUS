import React from "react";

export default function FAQ(props) {

//   var button = document.getElementById('hoverme');
// var slideout = document.getElementById('notif');

// button.onclick = function() {
//   slideout.classList.toggle('visible');
// };

  return (
    <form className="FAQ">
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
      {/* <div style={{display : props.alert.display}} id="notif" class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Submitted...</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}
    </form>
  );
}
