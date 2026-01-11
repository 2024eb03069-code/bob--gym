import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Timings", to: "timings" },
    { name: "Pricing", to: "pricing" },
    { name: "Facilities", to: "facilities" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="bg-primary p-2 rounded-lg group-hover:bg-white transition-colors duration-300">
            <Dumbbell className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            BOB <span className="text-primary">GYM</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-gray-300 hover:text-primary cursor-pointer transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/7061688050"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white text-sm font-bold uppercase rounded hover:bg-red-600 transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-gray-300 hover:text-primary cursor-pointer border-b border-white/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/7061688050"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-4 bg-primary text-white text-center font-bold uppercase rounded"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
