import React from "react";
import styles from "./Confirm.module.css";
import Btn from "./shared/Btn";


interface ConfirmProps {
  onClose: () => void;

}

const  Confirm:React.FC<ConfirmProps> = ({onClose}) =>{
  return (
    <div className={styles.container}>
      <img src="./assets/imgs/confirm.svg" alt="" />
      <h2>تم بنجاح طلب خدمة التامين</h2>
      <Btn name="العودة الى الرئيسية" type="sec" action={onClose} />
    </div>
  );
}
export default Confirm;