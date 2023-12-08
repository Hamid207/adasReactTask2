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
      <div className={style.grid_body}>
        <Grid
          topic="ADVENTURE"
          img="/public/img1.png"
          date="09.12.2023"
          gridHeaderText="Dream destinations to visit this year in Paris"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
        <Grid
          topic="TRAVEL"
          img="/public/img2.png"
          date="09.12.2023"
          gridHeaderText="Breathtaking first-person photos
          around Europe"
          gridText="Progressively incentivize cooperative systems through
          technically sound functionalities. Credibly productivate
          seamless data with flexible schemas."
        />
        <Grid
          topic="TECHNOLOGY"
          img="/public/img3.png"
          date="09.12.2023"
          gridHeaderText="What collectors need to know about
          authenticity"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
        <Grid
          topic="FASHION"
          img="/public/img1.png"
          date="09.12.2023"
          gridHeaderText="Instagram artists with great
          photography skills"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
        <Grid
          topic="ADVENTURE"
          img="/public/img5.png"
          date="09.12.2023"
          gridHeaderText="Thins to know before visiting
          Cave in Germany"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
        <Grid
          topic="FASHION"
          img="/public/img6.png"
          date="09.12.2023"
          gridHeaderText="Nina Smith vibrant work collab
          with Nike Dunk"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
        <Grid
          topic="ADVENTURE"
          img="/public/img7.png"
          date="09.12.2023"
          gridHeaderText="Richard Norton photorealistic
          rendering as real photos"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
        <Grid
          topic="ADVENTURE"
          img="/public/img8.png"
          date="09.12.2023"
          gridHeaderText="25 quality collectors toys inspired
          by famous films"
          gridText="Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas."
        />
      </div>
    </div>
  );
};

export default PopularTopics;
