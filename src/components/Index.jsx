import React from 'react'
import '../styles/Index.css'
import img from '/public/rempla.header.jpg'

const Inicio = () => {
  return (
    <div className='container-inicio d-flex aling-items-center justify-content-center'>
    <div className='text'>
        <h4 className='clas-present'>🧑‍💻 hola soy </h4>
        <h1 className='clas-present-name'>igor benavides</h1>
        <h5 className='clas-present-p'>
            <>desrrollador fronted con react</>
        </h5>
    </div>
        <div className='img'>
        <img src={img} width={600} alt="img" />
        </div>

    </div>
  )
}

export default Inicio