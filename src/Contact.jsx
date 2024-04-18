import React, { useState } from 'react'

const Contact = () => {

  const [data , SetData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  })

  const InputEvent = (event) => {
    const {name, value} = event.target;
    SetData ((preVal) => {
      return {
        ...preVal,
        [name]: value,

      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name is ${data.fullname}. Number is ${data.phone}, email is ${data.email} and here I want to say ${data.message}`
    )
  }

  return (
    <>
      <section className="contact my-5">
          <div className="container">
            <div className="row justify-content-center">
            <h2 className="text-center">Contact Us</h2>
              <div className="col-md-6 col 10">
                <form onSubmit={formSubmit}>
              <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Full Name" />
</div>
                
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="text" class="form-control" name="phone" value={data.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Phone Number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button class="btn btn-outline-secondary" type="button" onClick={formSubmit}>Submit</button>
</form>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact
