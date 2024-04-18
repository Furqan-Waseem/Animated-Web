import React from 'react'
import web from "../src/images/banner.jpg"
import Common from './Common.jsx'

const Home = () => {
  return (
    <>
      <Common heading="Welcome to Home Page" imgsrc={web} visit="/service" btname="Service" />
    </>
  )
}

export default Home
