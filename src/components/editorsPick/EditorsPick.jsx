import style from "../editorsPick/EditorsPick.module.css";
import EditorsGrid from "./editorsGrid/EditorsGrid";

const EditorsPick = () => {
  return (
    <div className={style.body}>
      <h2>Editor’s Pick</h2>
      <div className={style.grid_body}>
        <EditorsGrid
          img="/public/sec3img1.png"
          fashion="FASHION"
          date="09.12.2023"
          headerText="Richird Norton photorealistic rendering as real photos"
          text="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
        />
        <EditorsGrid
          img="/public/sec3img2.png"
          fashion="FASHION"
          date="09.12.2023"
          headerText="Richird Norton photorealistic rendering as real photos"
          text="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
        />
        <EditorsGrid
          img="/public/sec3img3.png"
          fashion="FASHION"
          date="09.12.2023"
          headerText="Richird Norton photorealistic rendering as real photos"
          text="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
        />
      </div>
    </div>
  );
};

export default EditorsPick;
