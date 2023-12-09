import style from "../footer/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.footer_body}>
        <div className={style.contact}>
          <p>Contact the Publisher</p>
          <ul>
            <li>mike@runo.com</li>
            <li>+944 450 904 505</li>
          </ul>
        </div>
        <div className={style.explorate}>
          <p>Explorate</p>
          <ul>
            <li>About</li>
            <li>Partners</li>
            <li>Job Opportunities</li>
            <li>Advertise</li>
            <li>Membership</li>
          </ul>
        </div>
        <div className={style.headquarter}>
          <p>Headquarter</p>
          <p>191 Middleville Road, NY 1001, Sydney Australia</p>
        </div>
        <div className={style.connections}>
          <p>Connections</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <p>2023 | RUNO Publisher Studio</p>
        <p>Subscribe Now</p>
      </div>
    </footer>
  );
};

export default Footer;
