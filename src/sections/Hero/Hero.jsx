import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg"



function Hero() {
  return (
    <section id="hero">
      <div className={styles.colorModelContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Vikas Kumar"
        />

        <img  className={styles.colorMode} 
        src={themeIcon} 
        alt="Color mode icon" 
        />
      </div>
    </section>
  );
}

export default Hero;
