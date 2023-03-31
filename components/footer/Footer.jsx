import { GiFilmSpool } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer>
      <section className={styles.FooterMain}>
        <div className={styles.FooterContacts}>
          <div className={styles.logo}>
            <GiFilmSpool /> CineMille
          </div>
          <div className={styles.FooterAdress}>
            203344 via Roma, Firenze, Italia, ITA +39 392 3929 210
          </div>
        </div>
        <div className={styles.FooterAbout}>
          <h4>About us</h4>
          <div className={styles.division}> </div>
          <div className={styles.FooterAboutText}>
            Esercizio storico dell’area fiorentina.
          </div>
        </div>
        <div className={styles.FooterMap}>
          <Image
            className={styles.mainImage}
            src="/static/images/map.png"
            alt="map"
            width={100}
            height={50}
          />
        </div>
      </section>
      <section className={styles.FooterSocial}>
        <GrFacebookOption />
        <AiOutlineInstagram />
        <AiOutlineYoutube />
        <RiLinkedinFill />
      </section>
    </footer>
  );
};

export default Footer;
