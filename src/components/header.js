import React from "react"
import { Link } from 'gatsby';
import './styles.css';

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          Hotelcito
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" 
                to={'/'}
                activeClassName='active'
                >
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" 
                to={'/nosotros'}
                activeClassName='active'
                >
                Nosotros
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header
