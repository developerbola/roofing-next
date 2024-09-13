import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="navigation">
        <li className="menu-item-has-children">
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Services</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/services">Services Page</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleToggle(2)}>
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li className="active menu-item-has-children">
          <Link href="#">Pages</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/project">Project Page</Link>
            </li>
            <li>
              <Link href="/project">Project Details</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/team-details">Team Details</Link>
            </li>
            <li>
              <Link href="/error">404 Error</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleToggle(3)}>
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
