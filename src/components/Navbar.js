import { Layout } from "antd";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authActions";

const { Header } = Layout;

export const Navbar = () => {

	const history = useHistory();
  const cookie = Cookies.get('token');
  const dispatch = useDispatch();

  const logMeOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  }

	return (
  <>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <div className="row align-items-start">
        <Link className="navbar-brand title" to="/">Marketplace</Link>
      </div>
      <div className="row align-items-center" name="search-input">
      { /*<form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> 
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */ }
      </div>
      <div className="row align-items-end" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          {!cookie && <li className="nav-item">
            <Link className="nav-link" to="/login">
              <span className="menu-links">Login</span>
            </Link>
          </li>}
          {!cookie && <li className="nav-item">
            <Link className="nav-link" to="/register">
              <span className="menu-links">Register</span>
            </Link>
          </li>}
          {!cookie && <li className="nav-item">
            <Link className="nav-link" to="#" onClick={e => logMeOut(e)}>
              <span className="menu-links">Logout</span>
            </Link>
          </li>}
          {!cookie && <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <span className="menu-links">Profile</span>
            </Link>
          </li>}
        </ul>
      </div>
    </div>
  </nav>
	</>
  )
}
