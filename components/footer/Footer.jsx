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
          <div className={styles.FooterName}>CineMille SRL</div>
          <div className={styles.FooterAdress}>
            203344 via Roma, Firenze, Italia, ITA +39 392 3929 210
          </div>
        </div>
        <div className={styles.FooterAbout}>
          <h4>About us</h4>
          <div className={styles.division}> </div>
          <div className={styles.FooterAboutText}>
            Il cinema “CineMille” è un esercizio storico dell’area fiorentina,
            nonché uno dei più grandi presenti in Toscana. Dispone di 12 sale di
            proiezione, di cui 2 in tecnologia IMAX. Le sale hanno una capienza
            differente, con le più grandi che dispongono di 250 posti ciascuna
            fino alle più piccole da circa 50 posti a sedere.
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
