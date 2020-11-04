import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyle";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Container}
`;

export const NavLogo = styled(Link)`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  justify-self: flex-start;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background: #101522;
    opacity: 1;
    transition: all 0.7s ease-out;
  }
`;

export const NavItems = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 4px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  text-transform: uppercase;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemsBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
