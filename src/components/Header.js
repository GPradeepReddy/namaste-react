import { useState } from "react";
import { LOGO_LINK } from "../utils/constants"
import { Link } from "react-router-dom";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_LINK} />
            </div>
            <ul className="nav-items">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Conatct Us</Link></li>
                <li>Cart</li>
                <li>
                    <button className="login-btn" onClick={() => {
                        loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
                    }}>
                        {loginBtn}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Header;