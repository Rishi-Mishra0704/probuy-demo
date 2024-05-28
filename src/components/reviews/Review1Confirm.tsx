import { useState } from "react";
import Btn from "../shared/Btn";
import styles from "./Review1Confirm.module.css";
const Review1Confirm = ({ plan = "" }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirm = () => {
    setIsConfirmed(!isConfirmed);
  };

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>تاكيد الدفع والطلب</h1>
        <img src="./assets/imgs/pro.png" alt="" />
      </div>
      <div className={styles.mess}>
        <h2>
          {plan === "selver"
            ? "سوف يتم دفع مبلغ 25,000 ر.س بعد 30 يوم"
            : "سوف يتم دفع مبلغ 50,000 ر.س بعد 30 يوم"}
        </h2>
      </div>
      <div className={styles.terms} onClick={confirm}>
        <span className={isConfirmed ? styles.select : ""}></span>
        الموافقه على الشروط والاحكام
      </div>
      <div className={styles.actions}>
        <Btn name="رجوع" type="sec" />
        <Btn
          name="تاكيد الدفع والطلب"
          dir={isConfirmed ? "/confirm" : "/review1"}
        />
      </div>
    </div>
  );
};

export default Review1Confirm;
