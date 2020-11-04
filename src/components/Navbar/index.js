import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyle";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLink,
  NavIcon,
  NavMenu,
  NavItemsBtn,
  NavBtnLink,
} from "./NavbarElement";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const onToggle = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavContainer>
            <NavLogo to="/" onClick={onToggle} click={click}>
              <NavIcon />
              Ultra
            </NavLogo>
            <MobileIcon onClick={onToggle}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={onToggle} click={click}>
              <NavItems>
                <NavLink to="/">Home</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/products">Products</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/services">Services</NavLink>
              </NavItems>
              <NavItemsBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>Sign Up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      Sign Up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemsBtn>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
