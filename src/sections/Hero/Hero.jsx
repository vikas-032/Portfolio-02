import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkdinIcon from "../../assets/linkedin-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModelContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Vikas Kumar"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>

      <div className={styles.info}>
        <h1>
          Vikas
          <br />
          Kumar
        </h1>
        <h2>Frontend Developer</h2>

        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://linkdin.com" target="_blank">
            <img src={linkdinIcon} alt="linkdin icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
