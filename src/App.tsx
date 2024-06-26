import { useState } from "react";
import styles from "./App.module.css"
import Modal from "./components/layout/Modal";
import Options from "./components/shared/Options";
import Btn from "./components/shared/Btn";
import Review1Confirm from "./components/reviews/Review1Confirm";
import Review2Confirm from "./components/reviews/Review2Confirm";


const App = () => {
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
          <Review1Confirm onClose={() => setState("default")}/>
        </Modal>
        <Modal isOpen={state === "review2"} onClose={() => setState("default")}>
          <Review2Confirm state={state} onClose={() => setState("default")} />
        </Modal>
      </div>
    </>
  );
    
}

export default App;
