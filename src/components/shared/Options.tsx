import styles from "./Options.module.css";

// Define the prop types for the component
interface Props {
  select1: () => void;
  select2: () => void;
  selected: string;
}
export default function Options({ select1, select2, selected }: Props) {

  return (
    <div className={styles.cont}>
      <span className={styles.title}>الخياريات المتاحة</span>

      <div className={`${styles.option} ${selected === "1" && styles.selected}`} onClick={select1}>
        <span></span>تقسيط المبلغ على 3 اقساط شهرية
      </div>
      <div className={`${styles.option} ${selected === "2" && styles.selected}`} onClick={select2}>
        <span></span>
        الدفع بعد 30يوم
      </div>
    </div>
  );
}
