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
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <div class="row align-items-start">
          <a class="navbar-brand" ><Link className="title" to="/">THPGram</Link></a>
      </div>
      <div class="row align-items-center" name="search-input">
      { /*<form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> 
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */ }
      </div>
      <div class="row align-items-end" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
          </li>
          <li class="nav-item">
            <a class="nav-link" >{!cookie && <Link className="menu-links"to="/login">Login</Link>}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >{!cookie && <Link className="menu-links" to="/register">Register</Link>}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >{cookie && <Link className="menu-links" to="#" onClick={e => logMeOut(e)}>Logout</Link>}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >{cookie && <Link className="menu-links" to="/profile">Profile</Link>}</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

	</>
  )
}



