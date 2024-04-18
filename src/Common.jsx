import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <>
      <section className="banner my-5">
        <div className="container">
            <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-lg-1 order-2">
                <div className="banner-text">
                    <h1>{props.heading} </h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quam ullam suscipit! Rerum debitis.</p> 
                       <NavLink className="btn btn-outline-secondary" to={props.visit}>{props.btname}</NavLink>
                </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
                <div className="banner-img">
                <img className="img-fluid animated" src={props.imgsrc} alt="heroimg" />
                </div>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Common
