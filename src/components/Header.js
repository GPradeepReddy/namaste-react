import { LOGO_LINK } from "../utils/constants"

const Header = () => {
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
            </ul>
        </div>
    )
}

export default Header;