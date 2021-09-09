import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authActions";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavbarComp = () => {

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
      
      <Navbar bg="light" expand="lg">
        <div className="container-fluid " >
          <Link className="navbar-brand title" to="/">Marketplace</Link>

          <Navbar.Toggle aria-controls="navbarScroll"/>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll>
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                {!cookie && <NavDropdown.Item>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      <span className="menu-links">Login</span>
                    </Link>
                  </li>
                </NavDropdown.Item>}
                {!cookie && <NavDropdown.Item>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      <span className="menu-links">Register</span>
                    </Link>
                  </li>
                </NavDropdown.Item>}
                {cookie && <NavDropdown.Item>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" onClick={e => logMeOut(e)}>
                      <span className="menu-links">Logout</span>
                    </Link>
                  </li>
                </NavDropdown.Item>}
                {cookie && <NavDropdown.Item>
                  <li className="nav-item">
                    <Link className="nav-link" to="/new_real_estate">
                      <span className="menu-links">New real estate</span>
                    </Link>
                  </li>
                </NavDropdown.Item>}
                {cookie && <NavDropdown.Item>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <span className="menu-links">Profile</span>
                    </Link>
                  </li>
                </NavDropdown.Item>}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}
