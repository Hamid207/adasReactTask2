import style from "../section2/BigImg.module.css";

const BigImg = () => {
  return (
    <div className={style.backImg}>
      <div>
        <div className={style.mainTexts}>
          <div className={style.fashion_body}>
            <p>FASHION</p>
          </div>
          <p className={style.text_1}>
            Richird Norton photorealistic rendering as real photos
          </p>
          <div className={style.text_2}>
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>

          <div className={style.line}></div>
          <p className={style.date}>09.12.2023</p>
        </div>
      </div>
    </div>
  );
};

export default BigImg;
