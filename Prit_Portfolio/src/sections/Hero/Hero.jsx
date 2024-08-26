import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
// import themeIcon from "../../assets/sun.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Pritanjan Baranwal" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Pritanjan
          <br /> Baranwal{" "}
        </h1>
        <h2>Fronted Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank"></a>
          <img src={twitterIcon} alt="twitter" />

          <a href="https://github.com/" target="_blank"></a>
          <img src={githubIcon} alt="Github" />

          <a href="https://linkedin.com/" target="_blank"></a>
          <img src={linkedinIcon} alt="Linkedin" />
          {/* 
          <a href="https://gmail.com/" target="_blank"></a>
          <img src={twitterIcon} alt="twitter" /> */}
        </span>
        <p className={styles.description}>
          With a passiong for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

// to target the element with same content select the 1st one and press control d

// alt  + down --> to move the content the down after selecting
