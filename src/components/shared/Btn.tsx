import { NavLink } from "react-router-dom";
import styles from "./Btn.module.css";

export default function Btn(
  { name = "", type = "", status = "", action = () => {}, dir = "" }
  
) {
  return (
    <NavLink to={dir} className={`${styles.btn} ${type === "sec" && styles.sec} `}>
      <button
        className={`${styles.btn} ${type === "sec" && styles.sec} ${
          status === "dis" && styles.dis
        } `}
        onClick={action}
      >
        {name}
      </button>
    </NavLink>
  );
}
