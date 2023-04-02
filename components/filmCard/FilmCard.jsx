import Image from "next/image";
import styles from "./styles.module.scss";

const FilmCard = ({ film }) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.imageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt={`${film.title}`}
          width="250"
          height="150"
          Layout="responsive"
        ></Image>
      </div>
      <div className={styles.filmInfo}>
        <h4>{film.title}</h4>
        <p>
          {film.overview.length > 50
            ? `${film.overview.substring(0, 50)}...`
            : film.overview}
        </p>
        <div>Vote: {film.vote_average}</div>
      </div>
    </div>
  );
};

export default FilmCard;
