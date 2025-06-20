import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <main>
        <section className="about-hero">
          <div className="container">
            <motion.div
              className="about-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>About BlogHub</h1>
              <p>
                We're passionate about creating a space where ideas flourish,
                stories inspire, and knowledge is shared freely.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="text-content"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>Our Story</h2>
                <p>
                  BlogHub was born from a simple idea: everyone has a story
                  worth telling. Founded in 2024, we set out to create a
                  platform where writers, thinkers, and creators could share
                  their insights with the world.
                </p>
                <p>
                  What started as a small project has grown into a vibrant
                  community of contributors from diverse backgrounds, all united
                  by their passion for sharing knowledge and inspiring others.
                </p>
              </motion.div>

              <motion.div
                className="image-content"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>

            <div className="values-grid">
              {[
                {
                  title: "Quality Content",
                  description:
                    "We believe in publishing well-researched, thoughtful content that provides real value to our readers.",
                  icon: "✨",
                },
                {
                  title: "Diverse Voices",
                  description:
                    "Our platform celebrates different perspectives and experiences from writers around the world.",
                  icon: "🌍",
                },
                {
                  title: "Community First",
                  description:
                    "We foster a supportive community where readers and writers can connect and learn from each other.",
                  icon: "🤝",
                },
                {
                  title: "Continuous Learning",
                  description:
                    "We're committed to staying curious, asking questions, and sharing knowledge that helps others grow.",
                  icon: "📚",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-card"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Join Our Community</h2>
              <p>
                Ready to share your story or discover new perspectives? Join
                thousands of readers and writers in our growing community.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default About;
