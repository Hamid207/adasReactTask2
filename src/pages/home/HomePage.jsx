import style from "../home/HomePage.module.css";
import PopularTopics from "../../components/popularTopics/PopularTopics";
import BigImg from "../../components/section2/BigImg";

const HomePage = () => {
  return (
    <>
      <section>
        <PopularTopics />
      </section>
      <section>
        <BigImg />
      </section>
    </>
  );
};

export default HomePage;
