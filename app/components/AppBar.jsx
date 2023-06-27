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
  background-color: #ffdada;
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
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  color: #141414;
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
  background-color: #ffdada;
  padding: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 65px;
  }
`;

const CollapsedMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const MenuItem = styled.a`
  text-align: end;
  font-size: 3rem;
  display: block;
  color: #3d3434;
  text-decoration: none;
  padding: 0.5rem 0;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
const MenuLinks = styled.div`
  display: flex;
  gap: 16px;
  p {
    margin: 0;
    color: #141414;
  }
`;
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { showCart, setShowCart, handleCloseCart, handleShowCart } = useStateContext();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/link2" },
    { name: "Jobs", path: "/link2" },
    { name: "Links", path: "/link2" },
    { name: "Us", path: "/link2" },
  ];

  return (
    <>
      <NavbarContainer>
        <Logo as={Link} href='/'>dear:</Logo>
        {!collapsed && (
          <MenuLinks>
            {menuLinks.map((link) => (
              <p key={link.name} href={link.path}>
                {link.name}
              </p>
            ))}
          </MenuLinks>
        )}
        <NavItems className='flex'>
          <div onClick={handleShowCart}>
            <FaShoppingCart style={{ fontSize: "25px", color: "#141414", cursor: "pointer" }} />
          </div>
          {collapsed && (
            <MenuToggle onClick={toggleMenu}>
              <HamburgerIcon
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 45, opacity: 1, y: 6 },
                  closed: { rotate: 0, opacity: 1, y: 0 },
                }}
              />

              <HamburgerIcon
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: -45, opacity: 1, y: -6 },
                  closed: { rotate: 0, opacity: 1, y: 0 },
                }}
              />
            </MenuToggle>
          )}
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
