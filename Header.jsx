import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <Link className={styles.navLink} to="/Home">
            Home
          </Link>{" "}
          <Link className={styles.navLink} to="/About">
            About
          </Link>
          <Link className={styles.navLink} to="/Contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

{
  /* <h1>SkillStream</h1>
        <p>Empowering Northern Nigerian Youth with Freelancing Opportunities</p> */
}
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <Link className={styles.navLink} to="/Home">
            Home
          </Link>{" "}
          <Link className={styles.navLink} to="/About">
            About
          </Link>
          <Link className={styles.navLink} to="/Contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

{
  /* <h1>SkillStream</h1>
        <p>Empowering Northern Nigerian Youth with Freelancing Opportunities</p> */
}

