import { Container } from "./styles";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  NavHashLink as BaseNavHashLink,
  HashLink as BaseHashLink,
} from "react-router-hash-link";
import { LinkProps } from "react-router-dom";

// Extend LinkProps to include the smooth property, children, className, and onClick
interface HashLinkProps extends LinkProps {
  smooth?: boolean;
  children: React.ReactNode; // Add children prop
  className?: string; // Add className prop
  onClick?: () => void; // Add onClick prop
}

// Create your own HashLink component
const HashLink: React.FC<HashLinkProps> = (props) => (
  <BaseHashLink {...props} />
);

// Create your own NavHashLink component
const NavHashLink: React.FC<HashLinkProps> = (props) => (
  <BaseNavHashLink {...props} />
);

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>S</span>
          <span>Schoonmaker</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        {/* Don't pass isActive directly to <nav> */}
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About Me
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
        </nav>

        {/* Add isActive only to appropriate attributes like aria-expanded */}
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => setActive(!isActive)} // Toggle the state here
        ></div>
      </Router>
    </Container>
  );
}
