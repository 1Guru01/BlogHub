import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠", description: "Welcome home" },
    { path: "/blog", label: "Blog", icon: "📝", description: "Read stories" },
    { path: "/about", label: "About", icon: "👥", description: "Our story" },
    { path: "/contact", label: "Contact", icon: "📧", description: "Get in touch" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setIsScrolled(scrollTop > 20);
      setScrollProgress(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className={`header ${isScrolled ? "header-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <motion.div
              className="logo-content"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="logo-icon"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👩🏻‍💻
              </motion.div>
              <div className="logo-text">
                <span className="logo-main">BlogHub</span>
                <span className="logo-tagline">Stories & Ideas</span>
              </div>
            </motion.div>
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <div className="nav-backdrop" onClick={closeMenu}></div>
            <div className="nav-content">
              <div className="nav-header">
                <div className="nav-logo">
                  <span className="nav-logo-icon">👩🏻‍💻</span>
                  <span>BlogHub</span>
                </div>
                <button
                  className="nav-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="nav-links">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    <motion.div
                      className="nav-link-content"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: isMenuOpen ? index * 0.1 : 0 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <span className="nav-link-icon">{item.icon}</span>
                      <div className="nav-link-text-container">
                        <span className="nav-link-text">{item.label}</span>
                        <span className="nav-link-description">
                          {item.description}
                        </span>
                      </div>
                      {location.pathname === item.path && (
                        <motion.div
                          className="nav-link-indicator"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div className="nav-footer">
                <div className="nav-social">
                  <motion.a
                    href="#"
                    className="nav-social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ℹ️
                  </motion.a>
                  <motion.a
                    href="#"
                    className="nav-social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    🌐
                  </motion.a>
                </div>
                <div className="nav-cta">
                  <motion.button
                    className="nav-cta-btn"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="cta-icon">✍️</span>
                    <span>Write with us</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <motion.button
              className={`menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-progress"
        style={{
          scaleX: scrollProgress,
          transformOrigin: "0%",
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
};

export default Header;
