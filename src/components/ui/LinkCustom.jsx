import { Link } from "react-router-dom";
import style from "../ui/LinkCustom.module.css";

const LinkCustom = (props) => {
  return (
    <Link to={props.to} className={style.linkCustom}>
      {props.name}
    </Link>
  );
};

export default LinkCustom;
