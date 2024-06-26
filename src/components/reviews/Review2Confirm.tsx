import { useState } from "react";
import Btn from "../shared/Btn";
import Milestone from "../shared/Milestone";
import styles from "./Review2Confirm.module.css";
import Confirm from "../Confirm";
import Modal from "../layout/Modal";

interface Review2ConfirmProps {
  plan?: string;
  state?: string;
  onClose: () => void;
}

const Review2Confirm: React.FC<Review2ConfirmProps> = ({
  plan,
  state,
  onClose,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const confirm = () => {
    setIsConfirmed(!isConfirmed);
  };
  const handleConfirmClick = () => {
    if (isConfirmed) {
      setShowConfirm(true);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>تاكيد الدفع والطلب</h1>
        <img src="./assets/imgs/pro.png" alt="" />
      </div>

      <div className={styles.sum}>
        <div className={styles.row}>
          <span className={styles.cell}>عدد الدفعات</span>
          <div className={styles.cell}>3</div>
        </div>
        <div className={styles.row}>
          <span className={styles.cell}>قيمة الدفعة</span>
          <div className={styles.cell}>
            {plan === "selver" ? "8,333" : "16,666"}
          </div>
        </div>
      </div>
      <div className={styles.milestones}>
        <span>الدفعات</span>
        <div className={styles.row}>
          <Milestone
            num="1"
            name="الدفعةالاولى"
            money={plan === "selver" ? "8,333" : "16,666"}
            date="22/10/2024"
          />
          <Milestone
            num="2"
            name="الدفعة الثانية"
            money={plan === "selver" ? "8,333" : "16,666"}
            date="22/11/2024"
          />
        </div>
        <Milestone
          num="3"
          name="الدفعة الثالثة"
          money={plan === "selver" ? "8,333" : "16,666"}
          date="22/12/2024"
        />
      </div>

      <div className={styles.terms} onClick={confirm}>
        <span className={isConfirmed ? styles.select : ""}></span>
        الموافقه على الشروط والاحكام
      </div>
      <div className={styles.actions}>
        <Btn name="رجوع" type="sec" action={() => setShowConfirm(false)} />
        <Btn name="تاكيد الدفع والطلب" action={handleConfirmClick} />
      </div>
      <Modal isOpen={showConfirm} onClose={onClose}>
        <Confirm onClose={onClose}/>
      </Modal>
    </div>
  );
};

export default Review2Confirm;
