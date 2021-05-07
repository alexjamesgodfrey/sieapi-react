import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

import '../styles/Header.scss';

const Header = () =>  {
    
    return (
        <div className="header-container">
        <Nav className="justify-content-center" id="flex-column">
            <Nav.Item as="li">
                <Link to="/"><Nav.Link href="/">works</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/commission"><Nav.Link href="/commission">commission</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Link to="/blog"><Nav.Link href="/blog">blog</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/about"><Nav.Link href="/about">about</Nav.Link></Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}

export default Header;