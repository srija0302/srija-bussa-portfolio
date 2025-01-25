import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ProfilePhoto } from "./components/ProfilePhoto/ProfilePhoto";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ProfilePhoto />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
