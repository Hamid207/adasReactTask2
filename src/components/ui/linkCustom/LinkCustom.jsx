import { Link, NavLink } from "react-router-dom";
import style from "../linkCustom/LinkCustom.module.css";

const LinkCustom = (props) => {
  let sty = style.linkCustom;

  // function checkActiveClass({ isActive }) {
  //   isActive ? "activeHeader" : "";
  // }

  switch (true) {
    case props.style == "linkCustom":
      sty = style.linkCustom;
      break;
    case props.style == "popularTocics":
      sty = style.popularTocics;
      break;
  }

  return (
    <NavLink to={props.to} className={sty}>
      {props.name}
    </NavLink>
  );
};

export default LinkCustom;
