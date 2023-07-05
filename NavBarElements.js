import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #000000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.hover {
    color: #000000;
  }
  &.active {
    color: #5a3a9a;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vm;
white-space: nowrap; */
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: left;
    width: 100%;
  }
`;