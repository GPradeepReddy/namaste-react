import { useState } from "react";
import { LOGO_LINK } from "../utils/constants"

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_LINK} />
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Conatct Us</li>
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