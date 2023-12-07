import style from "../popularTopics/PopularTopics.module.css";
import LinkCustom from "../ui/linkCustom/LinkCustom";
import Grid from "./grid/Grid";

const PopularTopics = () => {
  return (
    <div className={style.container}>
      <p className={style.first_text}>Popular topics</p>
      <div className={style.topics_body}>
        <ul className={style.topics_list}>
          <li>
            <LinkCustom to={"/all"} name="ALL" style={"popularTocics"} />
          </li>
          <li>
            <LinkCustom
              to={"/adventure"}
              name="Adventure"
              style={"popularTocics"}
            />
          </li>
          <li>
            <LinkCustom to={"/travel"} name="Travel" style={"popularTocics"} />
          </li>
          <li>
            <LinkCustom
              to={"/fashion"}
              name="Fashion"
              style={"popularTocics"}
            />
          </li>
          <li>
            <LinkCustom
              to={"/technology"}
              name="Technology"
              style={"popularTocics"}
            />
          </li>
          <li>
            <LinkCustom
              to={"/branding"}
              name="Branding"
              style={"popularTocics"}
            />
          </li>
        </ul>
        <p>View All</p>
      </div>
      <Grid />
    </div>
  );
};

export default PopularTopics;
