import { Link } from 'react-router-dom';
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <p className='footer'>want to showcase or sell your art like this? visit <Link className="footer-link" to="/about">about</Link></p>
    )
}

export default Footer;