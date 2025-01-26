// components/BottomNavbar.jsx
import styles from "./BottomNavBar.module.css";

export const BottomNavBar = () => {
  return (
    <>
      <nav className={styles.bottomNavbar}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "0 auto",
            marginLeft: "15px",
          }}
        >
          <li>
            <a href="/">
              <img src="/assets/bottomnavbar/home.png" alt="Home" />
            </a>
          </li>
          <li>
            <a href="#about">
              <img src="/assets/bottomnavbar/about.png" alt="About" />
            </a>
          </li>
          <li>
            <a href="#experience">
              <img src="/assets/bottomnavbar/experience.png" alt="Experience" />
            </a>
          </li>
          <li>
            <a href="#projects">
              <img src="/assets/bottomnavbar/projects.png" alt="Projects" />
            </a>
          </li>
          <li>
            <a href="#contact-mobile">
              <img src="/assets/bottomnavbar/contact.png" alt="Contact" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
