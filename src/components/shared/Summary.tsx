import styles from './Summary.module.css'
export default function Sammary({plan=""}) {
    return (
      <div className={styles.summary}>
        <h4> ملخص الطلب</h4>
  
        <div className={styles.col}>
          <label htmlFor="discond">كود الخصم</label>
          <input type="text" name="discond" placeholder="ادخل الكود..." />
        </div>
  
        <div className={`${styles.row} ${styles.group}`}>
          <div>
            <span>الشركة</span>
            <div>الشهد للمقاولات</div>
          </div>
          <div>
            <span>الحساب</span>
            <div>محمد على</div>
          </div>
        </div>
  
        <div className={`${styles.col} ${styles.group}`}>
          <div className={styles.row}>
            <span>سعر الباقة</span>
            <div>{plan==="selver" ? "25,000 ر.س" : "50,000 ر.س"}</div>
          </div>
          <div className={styles.row}>
            <span>تاريخ الطلب</span>
            <div>12 مارس 2024</div>
          </div>
          <div className={styles.row}>
            <span>نوع الباقة</span>
            <div>{plan==="selver" ? "فضية" : "ذهبية"}</div>
          </div>
          <div className={styles.row}>
            <span>قيمة الخصومات</span>
            <div> 0 ر.س</div>
          </div>
        </div>
  
        <div className={`${styles.row} ${styles.group}`}>
          <span>اجمالى السعر بعد الخصم</span>
          <div>{plan==="selver" ? "25,000 ر.س" : "50,000 ر.س"}</div>
        </div>
      </div>
    );
  }
  