import React from 'react'
import web from "../src/images/aboutbanner.jpg"
import Common from './Common.jsx'
const About = () => {
  return (
    <>
      <Common heading="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now" />
    </>
  )
}

export default About
