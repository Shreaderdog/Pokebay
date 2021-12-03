import { Navbar } from "react-bootstrap";
import './Navigation.css';
import logo from './pokebay.svg';

const Navigation = () => {
    
    return(
        <Navbar className="color-nav">
            <Navbar.Brand className="color-brand">
                <img
                    alt=""
                    src={logo}
                    width="100"
                    height="100"
                />{' '}
                <span style={{color: "white"}}>PokeBay</span>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Navigation;