import '../styles/Header.css'

const Header = () => {
  return (
    <div className='container-fluid'>
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <a clasName="nav-link active" aria-current="page" href="#">🛖</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">proyects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='#'>contact</a>
  </li>
</ul>
    </div>
  )
}

export default Header