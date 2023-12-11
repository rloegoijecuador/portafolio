import img from '/public/github-6980894_960_720.webp'
import img1 from '/public/likenind.png'
import img2 from '/public/correo.jpg'

const Footer = () => {
  return (
    <div>
        <div>
        <a href="https://github.com/rloegoijecuador" target="_blank">github</a>
           <img src={img} alt="" />
        </div>
        <div>
        <a href="https://www.linkedin.com/in/joel-benavides-a90b65296/"  target="_blank">linkedin</a>
           <img src={img1} alt="" />
        </div>
        <div>
        <a href="mailto:puyol.black96@gmail.com">Correo</a>
           <img src={img2} alt="" />
        </div>
    </div>
  )
}

export default Footer
