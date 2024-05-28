import styles from "./Milestone.module.css";
const Milestone = ({
  num = "1",
  name = "الدفعة الاولى",
  money = "4,000",
  date = "22/10/2024",
}) => {
  return (
    <div className={styles.mile}>
      <h3 className={styles.xhead}>
        <span>{num}</span>
        {name}
      </h3>
      <div className={styles.xrow}>
        <span className={styles.xcell}>قيمة الدفعة</span>
        <div className={styles.xcell}>{money}</div>
      </div>
      <div className={styles.xrow}>
        <span className={styles.xcell}>موعد السداد</span>
        <div className={styles.xcell}>{date}</div>
      </div>
      <div className={styles.xrow}>
        <span className={styles.xcell}>الحالة</span>
        <div className={styles.xcell}>غير مدفع</div>
      </div>
    </div>
  );
};

export default Milestone;
