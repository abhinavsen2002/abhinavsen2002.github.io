import { Link } from 'react-router-dom';
import styles from './Blogs.module.css';
import { blogPosts } from '../data/blogs';

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <section className={styles.section}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>Thoughts and reflections on life, code, and everything in between</p>
        
        <div className={styles.postsGrid}>
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className={styles.postCard}
            >
              <div className={styles.postDate}>{post.date}</div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

