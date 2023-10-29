import './style.css'
import nav_img from './../../img/icons/cinema-logo.jpg'
import nav_login_img from './../../img/icons/login.png'
import {NavLink} from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="d-flex jc-space-between align-items-center">

                    <div className="nav-title-and-logo d-flex align-items-center">
                        <h2 className="nav-title">Movie<br/> <span>Book</span></h2>
                        <NavLink to="/"><img src={nav_img} className="nav-logo"/></NavLink>
                    </div>

                    <div className="nav-list align-items-center">
                        <NavLink to="/movie">Movie</NavLink>
                        <NavLink to="/booking">Booking</NavLink>
                        <NavLink to="/halls">Halls</NavLink>
                        <NavLink to="#"><img src={nav_login_img} className="nav-login"/></NavLink>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
