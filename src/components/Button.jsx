import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', href, onClick, ...props }) => {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
