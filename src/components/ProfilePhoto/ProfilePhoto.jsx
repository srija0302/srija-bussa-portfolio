import styles from "./ProfilePhoto.module.css";

export const ProfilePhoto = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Srija Bussa</h1>
        <p className={styles.description}>
          I&apos;m a Full-Stack Developer with 3+ years of experience in React
          and Node.js
        </p>
        <a
          href="https://drive.google.com/file/d/1LSTIUEK2rsBFBsg2M01uCtUTrq8lD5NB/view?usp=sharing"
          className={styles.contactBtn}
          target="_blank"
        >
          My Resume
        </a>
      </div>
      <img
        src="/assets/profile/srija-bussa.jpeg"
        alt="profile"
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
