import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
import hipseter from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";

const Project = () => {
  return (
    <section id="project" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.ProjectContainer}>
        <ProjectCard
          src={viberr}
          link="https://google.com/"
          h3="viberr"
          p="Streaming App"
        />

        <ProjectCard
          src={freshBurger}
          link="https://google.com/"
          h3="Fresh Burger"
          p="Restaurant"
        />

        <ProjectCard
          src={hipseter}
          link="https://google.com/"
          h3="Hipseter"
          p="Glass Shop"
        />

        <ProjectCard
          src={fitlift}
          link="https://google.com/"
          h3="FItlift"
          p="fitness App"
        />
      </div>
    </section>
  );
};

export default Project;
