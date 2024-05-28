import React, { useState } from "react";
import Options from "./Options";
import Btn from "./Btn";
import styles from "./ProbuyClientCheckout.module.css";
import Modal from "../layout/Modal";
import Review1Confirm from "../reviews/Review1Confirm";
import Review2Confirm from "../reviews/Review2Confirm";

interface ProbuyClientCheckoutProps {
  otherPaymentOptions?: React.ReactNode;
}

const ProbuyClientCheckout: React.FC<ProbuyClientCheckoutProps> = () => {
  const [state, setState] = useState<string>("default");
  const [isSelected, setIsSelected] = useState<string>("");

  function selectPro() {
    setState("options");
  }
  function select1() {
    setIsSelected("1");
  }
  function select2() {
    setIsSelected("2");
  }

  function handleContinue() {
    if (!isSelected) return;
    setState(isSelected === "2" ? "review1" : "review2");
  }

  return (
    <>
      <div className={styles.probuy}>
        <div className={styles.PaymentMethods}>
          <img
            src={
              state === "default"
                ? "/assets/imgs/pro.png"
                : "/assets/imgs/selectedPro.png"
            }
            alt=""
            onClick={selectPro}
          />
        </div>
        <Modal isOpen={state === "options"} onClose={() => setState("default")}>
          {state === "options" && (
            <div>
              <Options select1={select1} select2={select2} selected={isSelected} />
              <div className={styles.actions}>
                <Btn action={() => setState("default")} name="رجوع" type="sec" />
                <Btn
                  name="المتابعة"
                  status={!isSelected ? "dis" : ""}
                  action={handleContinue}
                />
              </div>
            </div>
          )}
        </Modal>
        <Modal isOpen={state === "review1"} onClose={() => setState("default")}>
          <Review1Confirm />
        </Modal>
        <Modal isOpen={state === "review2"} onClose={() => setState("default")}>
          <Review2Confirm />
        </Modal>
      </div>
    </>
  );
};

export default ProbuyClientCheckout;
