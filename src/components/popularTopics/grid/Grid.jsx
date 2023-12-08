import style from "../grid/Grid.module.css";

const Grid = (props) => {
  return (
    <div className={style.grid_body}>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className={style.img}
      >
        <div className={style.topic}>
          <p>{props.topic}</p>
        </div>
      </div>
      <p className={style.creatDate}>{props.date}</p>
      <div className={style.gridHeaderText}>
        <p>{props.gridHeaderText}</p>
      </div>
      <div className={style.gridText}>
        <p>{props.gridText}</p>
      </div>
    </div>
  );
};

export default Grid;
