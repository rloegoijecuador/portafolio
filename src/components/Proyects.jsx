import proyecto1 from '../../public/poquedex app.png'
import proyecto2 from '../../public/app clima.png'
import proyecto3 from '../../public/galletta fort.png'
import '../styles//Proyect.css'

const Proyects = () => {
  return (
    <div className='proyect'>
    <h1 className='proyect__name'>Proyectos</h1>
    <div className='proyect__div'>
        <img src={proyecto1} width={350} alt="" />
        <a href="https://neon-moonbeam-fe842e.netlify.app/"  target="_blank" >Rick y morty</a>
      
    </div>
    <div>
        <a href="https://admirable-maamoul-d9b537.netlify.app/" target="_blank">App clima</a>
        <img src={proyecto2} width={350} alt="" />
      
    </div>
    <div>
        <a href="https://warm-swan-e04c56.netlify.app/" target="_blank">galleta de la fortuna</a>
        <img src={proyecto3} width={350} alt="" />
      
    </div>
    </div>
  )
}

export default Proyects