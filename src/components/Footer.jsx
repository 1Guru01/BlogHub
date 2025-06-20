import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section footer-brand"
            variants={itemVariants}
          >
            <div className="brand-logo">
              <h3>BlogHub</h3>
              <div className="brand-tagline">Where Stories Come to Life</div>
            </div>
            <p>
              Empowering writers and readers to connect through meaningful
              stories, insights, and ideas that inspire positive change in the
              world.
            </p>

            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-icon">ⓕ</span>
                <span className="social-label">Facebook</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/guru049"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-icon">ℹ️</span>
                <span className="social-label">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">All Posts</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Categories</h4>
            <ul className="footer-links">
              <li>
                <Link to="/blog">Technology</Link>
              </li>
              <li>
                <Link to="/blog">Design</Link>
              </li>
              <li>
                <Link to="/blog">Business</Link>
              </li>
              <li>
                <Link to="/blog">Lifestyle</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Writing Guidelines</a>
              </li>
              <li>
                <a href="#">Become a Writer</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section footer-newsletter"
            variants={itemVariants}
          >
            <h4>Stay Updated</h4>
            <p>Get the latest stories delivered to your inbox</p>

            <form className="footer-newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="footer-newsletter-input"
                />
                <motion.button
                  type="submit"
                  className="footer-newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </motion.button>
              </div>
            </form>

            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Subscribers</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} BlogHub. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="#">Terms of Service</a>
                <span className="separator">•</span>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decorations">
        <motion.div
          className="footer-decoration decoration-1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="footer-decoration decoration-2"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💫
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
