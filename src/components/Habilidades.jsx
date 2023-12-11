import img from '/public/react img.png'
import img1 from '/public/HTML.webp'
import img2 from '/public/css.jpg'
import img3 from '/public/javascript.png'
import img4 from '/public/typescript.jpg'


const Habilidades = () => {
  return (
    <div>
        <h1>Habilidades</h1>
        <div>
        <img src={img1} alt="" />
        <h2>Html</h2>
        </div>
        <div>
        <img src={img2} alt="" />
        <h2>css</h2>
        </div>
        <div>
        <img src={img3} alt="" />
        <h2>JavaScript</h2>
        </div>
        <div>
        <img src={img} alt="" />
        <h2>React</h2>
        </div>
        <div>
        <img src={img4} alt="" />
        <h2>TypeScript</h2>
        </div>
    </div>
  )
}

export default Habilidades