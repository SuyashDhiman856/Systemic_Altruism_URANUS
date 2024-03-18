import React from 'react'

export default function FAQ() {
  return (
    <form className="FAQ">
        <h2 className="text-secondary">FAQ Section</h2>
        <br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <br/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
  )
}
