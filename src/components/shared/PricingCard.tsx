import { NavLink } from "react-router-dom";
import Styles from "./PricingCard.module.css";
interface Props {
  title: string;
  sub: string;
  points: string[];
  action: string;
  actionName: string;
  select: () => void;
}

export default function PricingCard({
  title = "",
  sub = "",
  points,
  action = "",
  actionName = "",
  select
} : Props) {
  if (!points || !Array.isArray(points)) {
    return null; // or handle the case where points is not valid
  }
  return (
    <div className={Styles.card}>
      <div className={Styles.head}>
        <h3>{title}</h3>
        <span>{sub}</span>
      </div>
      <div className={Styles.body}>
        {points.map((point) => {
          return (
            <div className={Styles.point} key={point}>
              •<span>{point}</span>
            </div>
          );
        })}
      </div>
      <NavLink to={action} onClick={select}>
        <button className={Styles.md}>{actionName}</button>
      </NavLink>
    </div>
  );
}
