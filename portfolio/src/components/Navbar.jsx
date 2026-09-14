import { useState } from "react";
import { links } from "../data";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Added 'sticky top-0 z-50' so the navbar stays at the top when scrolling
    <nav className="bg-emerald-100 sticky top-0 z-50 shadow-sm">
      {/* Main Navbar Container */}
      <div className="align-element py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-3xl font-bold">
          SolVa<span className="text-emerald-600">Tech</span>
        </h2>

        {/* Desktop Navigation Links (Hidden on mobile, visible on sm screens and up) */}
        <div className="hidden sm:flex gap-x-6">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button (Visible only on mobile, hidden on sm screens and up) */}
        <button
          className="sm:hidden text-3xl text-emerald-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu (Stacks vertically, only shows when isOpen is true) */}
      {isOpen && (
        <div className="sm:hidden bg-emerald-50 border-t border-emerald-200 px-8 pb-4">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                // Closes the mobile menu automatically when a link is clicked
                onClick={() => setIsOpen(false)}
                className="block capitalize text-lg tracking-wide py-3 hover:text-emerald-600 duration-300 border-b border-emerald-100 last:border-none"
              >
                {text}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
