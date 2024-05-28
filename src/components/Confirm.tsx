import styles from "./Confirm.module.css";
import Btn from "./shared/Btn";


export default function Confirm() {
  return (
    <div className={styles.container}>
      <img src="./assets/imgs/confirm.svg" alt="" />
      <h2>تم بنجاح طلب خدمة التامين</h2>
      <Btn name="العودة الى الرئيسية" type="sec" />
    </div>
  );
}
