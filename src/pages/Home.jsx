import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogPosts";

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);
  const recentPosts = blogPosts.slice(3, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <main>
        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="container">
            <motion.div
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="hero-badge">
                ✨ Welcome to the Future of Blogging ✨
              </motion.div>

              <motion.h1 variants={itemVariants}>
                Where <span className="gradient-text">Stories</span> Come to
                Life
              </motion.h1>

              <motion.p variants={itemVariants}>
                Join thousands of readers discovering extraordinary stories,
                cutting-edge insights, and transformative ideas from our global
                community of passionate writers and thought leaders.
              </motion.p>

              <motion.div className="hero-actions" variants={itemVariants}>
                <Link to="/blog">
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Stories
                    <span className="btn-icon">→</span>
                  </motion.button>
                </Link>

                <Link to="/about">
                  <motion.button
                    className="btn-secondary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div className="hero-stats" variants={itemVariants}>
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Readers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Articles</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Writers</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="hero-decorations">
            <motion.div
              className="floating-element element-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              📚
            </motion.div>
            <motion.div
              className="floating-element element-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              ✍️
            </motion.div>
            <motion.div
              className="floating-element element-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              💡
            </motion.div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="featured-posts">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="section-badge">Featured Content</div>
              <h2>Trending Stories</h2>
              <p>
                Discover the most engaging and thought-provoking articles from
                our community
              </p>
            </motion.div>

            <div className="posts-grid">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="categories-showcase">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Explore by Category</h2>
              <p>Find content that matches your interests</p>
            </motion.div>

            <motion.div
              className="categories-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Technology",
                  icon: "💻",
                  count: "45 articles",
                  color: "var(--primary-color)",
                },
                {
                  name: "Design",
                  icon: "🎨",
                  count: "32 articles",
                  color: "var(--secondary-color)",
                },
                {
                  name: "Business",
                  icon: "📈",
                  count: "28 articles",
                  color: "var(--accent-color)",
                },
                {
                  name: "Lifestyle",
                  icon: "🌟",
                  count: "21 articles",
                  color: "#10b981",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  className="category-card"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="category-icon"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.count}</p>
                  <Link to="/blog" className="category-link">
                    Explore →
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="recent-posts">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Latest Insights</h2>
              <p>Fresh perspectives and new ideas from our writers</p>
            </motion.div>

            <div className="posts-grid">
              {recentPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

            <motion.div
              className="section-cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/blog">
                <motion.button
                  className="btn-outline"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Posts
                  <span className="btn-icon">→</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="container">
            <motion.div
              className="newsletter-content"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="newsletter-icon">📬</div>
              <h2>Stay in the Loop</h2>
              <p>
                Get the latest stories and insights delivered straight to your
                inbox
              </p>

              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <motion.button
                  type="submit"
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>

              <p className="newsletter-disclaimer">
                Join 10,000+ readers. No spam, unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Home;
