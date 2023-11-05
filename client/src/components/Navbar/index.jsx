import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
<>

 {/* Left Margin Nav */}
 <Nav className='left-nav' defaultActiveKey="/home" variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav>
{/*Left Margin Nav END */}


{/*CENTERED Margin Nav START */}
<Nav className='center-nav justify-content-center'>
<Nav.Item>    
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
</Nav.Item>
</Nav>
{/*CENTERED Margin Nav END */}


{/*Right Margin Nav START */}
<Nav className='right-nav ml-auto'>
       <Nav.Item>
       <Nav.Link href="/home">Active</Nav.Link>
       <Nav.Link eventKey="link-1">Link</Nav.Link>
       <Nav.Link eventKey="link-2">Link</Nav.Link>
       <Nav.Link eventKey="disabled" disabled>
         Disabled
       </Nav.Link>
       </Nav.Item>
    </Nav>

    {/*Left Margin Nav START */}
    </>
  );
}

export default NavDropdownExample;