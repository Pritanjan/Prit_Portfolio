import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JSL" />
        <SkillList src={checkMarkIcon} skill="JAVA" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Taliwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Reduc" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="GIt" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>{" "}
      <hr />
    </section>
  );
}

export default Skills;
