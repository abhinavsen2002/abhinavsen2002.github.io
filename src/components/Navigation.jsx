import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const RESUME_LINK = 'https://drive.google.com/file/d/1n0MQs9CWnxIckZHgijC4ThpIA-EdCnfv/view?usp=sharing';

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/blog" className={styles.link}>
          Blog
        </Link>
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
