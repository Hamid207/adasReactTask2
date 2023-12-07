import LinkCustom from "../../ui/linkCustom/LinkCustom";
import style from "../header/Header.module.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className={style.headerBody}>
          <div className={style.header}>
            <div className={style.logo}>RUNO</div>
            <div>
              <ul className={style.headerUl}>
                <li>
                  <LinkCustom to="/" name="Home" style={"linkCustom"} />
                </li>
                <li>
                  <LinkCustom to="/about" name="About" style={"linkCustom"} />
                </li>
                <li>
                  <LinkCustom
                    to="/articles"
                    name="Articles"
                    style={"linkCustom"}
                  />
                </li>
                <li>
                  <LinkCustom
                    to="/contactUs"
                    name="Contact Us"
                    style={"linkCustom"}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className={style.headerTexts}>
            <div className={style.adventure}>
              <p>ADVENTURE</p>
            </div>
            <div className={style.firstText}>
              <p>Richird Norton photorealistic rendering as real photos</p>
            </div>
            <div className={style.secondText_body}>
              <div>
                <p>08.08.2023</p>
              </div>
              <div className={style.line}></div>
              <div className={style.big_text}>
                <p>
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
