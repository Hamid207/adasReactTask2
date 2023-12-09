import style from "../editorsGrid/EditorsGrid.module.css";

const EditorsGrid = (props) => {
  return (
    <div
      className={style.body}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className={style.fashion}>
        <div>
          <p>{props.fashion}</p>
        </div>
      </div>
      <div className={style.texts_body}>
        <p className={style.date}>{props.date}</p>
        <div className={style.headerText}>
          <p>{props.headerText}</p>
        </div>

        <div className={style.text}>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default EditorsGrid;
