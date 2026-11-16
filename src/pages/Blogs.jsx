import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blogs.module.css';
import { blogYears } from '../data/blogs';

const Blogs = () => {
  // All years start collapsed, each toggleable
  const [openYears, setOpenYears] = useState(() => {
    const initial = {};
    blogYears.forEach((group) => {
      initial[group.year] = false;
    });
    return initial;
  });

  const toggleYear = (year) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const allOpen = Object.values(openYears).every(Boolean);

  const toggleAll = () => {
    const nextState = !allOpen;
    const updated = {};
    blogYears.forEach((group) => {
      updated[group.year] = nextState;
    });
    setOpenYears(updated);
  };

  return (
    <div className={styles.blogs}>
      <section className={styles.section}>
        <div className={styles.topHeader}>
          <div>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              Thoughts and reflections on life, code, and everything in between
            </p>
          </div>
          <button 
            type="button" 
            onClick={toggleAll}
            className={styles.toggleAllBtn}
            aria-label={allOpen ? 'Collapse all years' : 'Expand all years'}
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <div className={styles.yearsList}>
          {blogYears.map((group) => {
            const isOpen = !!openYears[group.year];
            return (
              <div key={group.year} className={styles.yearSection}>
                <button
                  type="button"
                  className={`${styles.yearHeader} ${isOpen ? styles.yearHeaderOpen : ''}`}
                  onClick={() => toggleYear(group.year)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.yearInfo}>
                    <span className={styles.yearNumber}>{group.year}</span>
                    <span className={styles.yearDivider}>:</span>
                    <span className={styles.yearTagline}>{group.tagline}</span>
                  </div>

                  <div className={styles.yearMeta}>
                    <span className={styles.postCount}>
                      {group.posts.length} {group.posts.length === 1 ? 'post' : 'posts'}
                    </span>
                    <svg
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.postsGrid}>
                    {group.posts.map((post) => (
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
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
