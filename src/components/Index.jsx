import React from 'react'
import '../styles/Index.css'
import img from '/public/DesarrolloWeb-Recurso-01.jpg'

const Inicio = () => {
  return (
    <div className='container-inicio d-flex aling-items-center justify-content-center'>
    <div className='text'>
        <h4 className='clas-present'>🧑‍💻 hola soy </h4>
        <h1 className='clas-present-name'>igor</h1>
        <h5 className='clas-present-p'>
            <>desrrollador web full stack</>
        </h5>
    </div>
        <div className='img'>
        <img src={img} width={600} alt="img" />
        </div>

    </div>
  )
}

export default Inicio