import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="/"><h1>My Blog</h1></a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Create</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar