import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>
              Die <span className="emphasis">n e u e</span> Stadt Krems
            </h3>
          </Link>

          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link to="/" className="filter-btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="filter-btn">
                About
              </Link>
            </li>
            <li>
              <Link to="/speisekarte" className="filter-btn">
                Speisekarte
              </Link>
            </li>
            {/* <li>
              <Link to="/kontakt" className="filter-btn">
                Kontakt
              </Link>
            </li> */}
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/zurstadtkrems" target="_blank">
              {" "}
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
