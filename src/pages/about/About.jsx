import PopularTopics from "../../components/popularTopics/PopularTopics";
import EditorsPick from "../../components/editorsPick/EditorsPick";
import AboutText from "../../components/abaoutText/AboutText";

const About = () => {
  return (
    <>
      <section>
        <AboutText />
      </section>

      <section>
        <EditorsPick name="Related Posts" />
      </section>
    </>
  );
};

export default About;
