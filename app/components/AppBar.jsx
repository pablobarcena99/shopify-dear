"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useStateContext } from "../utils/StateContext";
import Link from "next/link";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: white;
  color: #141414;
`;

const Logo = styled.a`
  font-size: 25px;
  margin: 0;
  font-family: var(--font-varent);
  color: #141414;
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  z-index: 10;
  flex-direction: column;
  color: white;
  display: flex;
`;

const HamburgerIcon = styled(motion.span)`
  display: block;
  height: 2px;
  width: 20px;
  border-radius: 1px;
  background-color: #141414;
  margin: 5px 0 5px 0;
  transform-origin: center;
`;

const Menu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background-color: white;
  padding: 100px 4rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CollapsedMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  color: #141414;
  :hover {
    color: #ce6d8b;
  }
`;

const MenuItem = styled.a`
  text-align: end;
  font-size: 2rem;
  display: block;
  color: #141414;
  text-decoration: none;
  padding: 0.5rem 0;
`;
const NavLinks = styled.div`
  flex-grow: 1;
  display: flex;

  align-items: center;
  gap: 32px;
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const Navbar = () => {
  const { handleToggleCart, handleToggleMenu, isMenuOpen, showCart } = useStateContext();
  const closeButtonAction = () => {
    if (isMenuOpen) {
      handleToggleMenu();
    } else if (showCart) {
      handleToggleCart();
      if (isMenuOpen) {
        handleToggleMenu();
      }
    } else {
      handleToggleMenu();
    }
  };

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "Jobs", path: "/" },
    { name: "Links", path: "/" },
    { name: "Us", path: "/" },
  ];

  return (
    <>
      <NavbarContainer>
        <NavLinks>
          <Logo as={Link} href='/'>
            dear:
          </Logo>
        </NavLinks>
        <NavItems className='flex'>
          {!showCart && (
            <div onClick={handleToggleCart}>
              <FaShoppingCart style={{ fontSize: "25px", color: "#141414", cursor: "pointer" }} />
            </div>
          )}
          <MenuToggle onClick={closeButtonAction}>
            <HamburgerIcon
              animate={isMenuOpen || showCart ? "open" : "closed"}
              variants={{
                open: { rotate: 45, opacity: 1, y: 6 },
                closed: { rotate: 0, opacity: 1, y: 0 },
              }}
            />

            <HamburgerIcon
              animate={isMenuOpen || showCart ? "open" : "closed"}
              variants={{
                open: { rotate: -45, opacity: 1, y: -6 },
                closed: { rotate: 0, opacity: 1, y: 0 },
              }}
            />
          </MenuToggle>
        </NavItems>
        {isMenuOpen && (
          <Menu>
            <CollapsedMenuLinks>
              {menuLinks.map((link) => (
                <MenuItem key={link.name} href={link.path}>
                  {link.name}
                </MenuItem>
              ))}
            </CollapsedMenuLinks>
          </Menu>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
