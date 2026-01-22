import { useParams, Link } from 'react-router-dom';
import styles from './BlogPost.module.css';
import { blogPosts } from '../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();

  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className={styles.blogPost}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogPost}>
      <article className={styles.article}>
        <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
        
        <header className={styles.header}>
          <div className={styles.date}>{post.date}</div>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        <div className={styles.content}>
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

