import React from 'react'
import Card from './Card'
import Carddata from './Carddata'

const Service = () => {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row justify-content-center gy-5">
            <h2 className="text-center">Our Services</h2>
           {
            Carddata.map((val,index) =>{
                return <Card key={index} imgsrc={val.imgsrc} title={val.title} cardtext={val.cardtext} />
            })
           }
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
