import styles from './About.module.css';

const About = () => {
  const aspects = [
    "I am a software developer by trade, and I love solving tough problems.",
    "The philosopher in me loves pure math, but the engineer in me knows I will never use it. It was once my dream to go into math research, but I realised my true passion is equity 💰",
    "I love learning new skills. I paint, I write, I sing, and I play tennis and squash at a semi-professional level. I am obsessed with learning, and getting better at everything I do."
  ];

  return (
    <div className={styles.about}>
      <section className={styles.section}>
        <h1 className={styles.title}>3 things to know about me</h1>

        {aspects.map((aspect, index) => (
          <div key={index} className={styles.aspect}>
            <span className={styles.number}>{index + 1}.</span>
            <p className={styles.description}>{aspect}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
