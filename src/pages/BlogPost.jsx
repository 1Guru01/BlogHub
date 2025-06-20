import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <motion.div
        className="page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="container"
          style={{ padding: "120px 20px", textAlign: "center" }}
        >
          <h1>Post not found</h1>
          <Link to="/blog">
            <button>Back to Blog</button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <main>
        <article className="blog-post">
          <motion.div
            className="blog-post-header"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container">
              <nav className="breadcrumb">
                <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> /{" "}
                {post.title}
              </nav>

              <div className="blog-post-meta">
                <span className="category-tag">{post.category}</span>
                <div className="meta-info">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="blog-post-title">{post.title}</h1>

              <div className="author-info">
                <img src={post.author.avatar} alt={post.author.name} />
                <div>
                  <strong>{post.author.name}</strong>
                  <p>Published on {post.date}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="blog-post-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={post.image} alt={post.title} />
          </motion.div>

          <motion.div
            className="blog-post-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="container">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="blog-post-footer">
                <Link to="/blog" className="back-link">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
    </motion.div>
  );
};

export default BlogPost;
