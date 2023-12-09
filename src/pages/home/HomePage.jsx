import style from "../home/HomePage.module.css";
import PopularTopics from "../../components/popularTopics/PopularTopics";
import BigImg from "../../components/section2/BigImg";
import EditorsPick from "../../components/editorsPick/EditorsPick";

const HomePage = () => {
  return (
    <>
      <section>
        <PopularTopics />
      </section>

      <section>
        <BigImg />
      </section>

      <section>
        <EditorsPick name="Editor’s Pick" />
      </section>
    </>
  );
};

export default HomePage;
