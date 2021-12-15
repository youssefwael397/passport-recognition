import React from "react";
import {
    NavLink,
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './Home'
import Help from './Help'
import Admin from './Admin'
import Login from './Login';

function Header() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-bg">
                <div className="container">
                    <NavLink className="navbar-brand logo" to="/"><i class="fas fa-dice-d20 logo-span"></i> P<span>D</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto "> {/* my-font */}
                            <li className="nav-item  mx-sm-0">
                                <NavLink className="nav-link" to="/"><i class="fas fa-home"></i> Home</NavLink>
                            </li>
                            {/* <li className="nav-item mx-3 mx-sm-0">
                                <NavLink className="nav-link" to="/admin"><i class="fas fa-user-shield"></i> Admin</NavLink>
                            </li> */}
                            <li className="nav-item  mx-sm-0">
                                <NavLink className="nav-link" to="/help"><i class="fas fa-question-circle"></i> Help</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/help" element={<Help />} />
            </Routes>


        </Router>
    )
}

export default Header;
