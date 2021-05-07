import { Link } from 'react-router-dom';
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <p className='footer'>log in as <Link className="footer-link" to="/admin">admin</Link></p>
    )
}

export default Footer;