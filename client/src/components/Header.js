import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

import '../styles/Header.scss';

const Header = () =>  {
    
    return (
        <Nav className="justify-content-center" id="flex-column">
            <Nav.Item as="li">
                <Link to="/" className="header-link"><Nav.Link href="/"><span className="header-link">aspen</span></Nav.Link></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/commission" className="header-link"><Nav.Link href="/commission"><span className="header-link">commission</span></Nav.Link></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link className="header-link" to="/admin"><Nav.Link className="header-link fade-in" href="/admin"><span className="header-link">admin</span></Nav.Link></Link>
            </Nav.Item>
            {/* <Nav.Item as="li">
            <Link to="/blog"><Nav.Link href="/blog">blog</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/about"><Nav.Link href="/about">about</Nav.Link></Link>
            </Nav.Item> */}
        </Nav>
    )
}

export default Header;