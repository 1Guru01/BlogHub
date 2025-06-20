import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./BlogCard.css";

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <div className="blog-card-category">{post.category}</div>
      </div>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-date">{post.date}</span>
          <span className="blog-card-read-time">{post.readTime}</span>
        </div>

        <h3 className="blog-card-title">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>

        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-author">
          <img src={post.author.avatar} alt={post.author.name} />
          <span>{post.author.name}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
