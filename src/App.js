import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";
import "./App.scss";
import AppRoutes, { routeLinks } from "./AppRoutes";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar light expand="md">
          <NavbarBrand href="/">React news hook</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {Object.keys(routeLinks).map((key) => {
                const {name, path, hideInNav} = routeLinks[key];
                if (!hideInNav)
                  return (
                    <NavItem key={key}>
                      <NavLink href={path}>{name}</NavLink>
                    </NavItem>
                  );
              })}
            </Nav>
            <NavbarText>BSS</NavbarText>
          </Collapse>
        </Navbar>
      </header>
      <AppRoutes />
    </div>
  );
}

export default App;
