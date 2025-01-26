import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="Email icon" />
            <a href="mailto:srijareddy32000@gmail.com" target="_blank">
              srijareddy32000@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
            <a
              href="https://www.linkedin.com/in/srija-bussa-79a054189/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="Github icon" />
            <a href="https://github.com/srija0302" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </footer>
      <footer id="contact-mobile" className={styles.mobileContainer}>
        <div>
          <h2>Feel free to reach out!</h2>
        </div>
        <div>
          <ul className={styles.mobileContainerLinks}>
            <li className={styles.mobileContainerLink}>
              <a href="mailto:srijareddy32000@gmail.com" target="_blank">
                <img src="/assets/contact/emailIcon.png" alt="Email icon" />
              </a>
            </li>
            <li className={styles.mobileContainerLink}>
              <a
                href="https://www.linkedin.com/in/srija-bussa-79a054189/"
                target="_blank"
              >
                <img
                  src="/assets/contact/linkedinIcon.png"
                  alt="LinkedIn icon"
                />
              </a>
            </li>
            <li className={styles.mobileContainerLink}>
              <a href="https://github.com/srija0302" target="_blank">
                <img src="/assets/contact/githubIcon.png" alt="Github icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
