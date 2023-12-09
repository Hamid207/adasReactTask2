import style from "../abaoutText/AboutText.module.css";

const AboutText = () => {
  return (
    <div className={style.body}>
      <div className={style.date_body}>
        <p className={style.date}>09.12.2023</p>
        <div className={style.line}></div>
        <p className={style.duration}>4 minutes</p>
      </div>
      <div className={style.main_text_body}>
        <div>
          <p className={style.main_text}>
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios.
          </p>

          <p className={style.main_text}>
            Synergistically drive e-business leadership with unique synergy.
            Compellingly seize market positioning ROI and bricks-and-clicks
            e-markets. Proactively myocardinate timely platforms through
            distributed ideas. Professionally optimize enabled core competencies
            for leading-edge sources. Professionally enhance stand-alone
            leadership with innovative synergy. Rapidiously generate backend
            experiences vis-a-vis long-term high-impact relationships.
            Authoritatively supply market-driven mindshare and bricks-and-clicks
            opportunities. Holisticly create diverse innovation through adaptive
            communities. Efficiently empower seamless meta-services with
            impactful opportunities. Distinctively transition virtual
            outsourcing with focused e-tailers.
          </p>
          <p className={style.big_size_text}>
            “ Monotonectally seize superior mindshare rather than efficient
            technology. ”
          </p>
          <p className={style.main_text}>
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
          </p>
        </div>
        <div className={style.user_text_info}>
          <p>ADVENTURE</p>
          <p>PHOTO</p>
          <p>DESIGN</p>
        </div>
        <div>
          <div className={style.user_info_body}>
            <img src="/public/Ellipse.png" alt="" />
            <div>
              <p className={style.user_name}>By Jennifer Lawrence</p>
              <p className={style.job}>Thinker & Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
