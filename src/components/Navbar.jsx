import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContainer>
      <LogoArea as={Link} to="/">
        LOGO
      </LogoArea>
      <MenuLinks>
        <MenuItemLink as={Link} to="/about">
          About Us
        </MenuItemLink>
        <MenuItemLink as={Link} to="/jobs">
          Jobs
        </MenuItemLink>
      </MenuLinks>
      <MenuIconArea onClick={() => setOpen((v) => !v)}>
        <FaBars size={28} />
      </MenuIconArea>
      {open && (
        <DropdownMenu>
          <MenuItem as={Link} to="/about" onClick={() => setOpen(false)}>
            About Us
          </MenuItem>
          <MenuItem as={Link} to="/jobs" onClick={() => setOpen(false)}>
            Jobs
          </MenuItem>
        </DropdownMenu>
      )}
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  background: #232222;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const LogoArea = styled.div`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const MenuIconArea = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  @media (min-width: 601px) {
    display: none;
  }
`;

const MenuLinks = styled.div`
  display: none;
  gap: 24px;
  align-items: center;
  @media (min-width: 601px) {
    display: flex;
    margin-left: auto;
  }
`;

const MenuItemLink = styled.a`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s, transform 0.18s cubic-bezier(0.4, 0.2, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
  &:hover {
    background: #222;
    transform: scale(1.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 48px;
  right: 16px;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  min-width: 120px;
  z-index: 100;
`;

const MenuItem = styled.div`
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #333;
  }
`;
