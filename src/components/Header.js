import Nav from 'react-bootstrap/Nav';
import '../styles/Header.scss';

const Header = () =>  {
    
    return (
        <div className="header-container">
        <Nav id="flex-column">
            <Nav.Item>
                <Nav.Link eventKey="/home">shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>about</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}

export default Header;