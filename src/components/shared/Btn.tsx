import { NavLink } from "react-router-dom";
import styles from "./Btn.module.css";

export default function Btn({ name = "", type = "", status = "", action = () => {}, dir = "" }) {
  const buttonClass = `${styles.btn} ${type === "sec" ? styles.sec : ""} ${status === "dis" ? styles.dis : ""}`;

  return dir ? (
    <NavLink to={dir} className={buttonClass}>
      {name}
    </NavLink>
  ) : (
    <button className={buttonClass} onClick={action}>
      {name}
    </button>
  );
}
