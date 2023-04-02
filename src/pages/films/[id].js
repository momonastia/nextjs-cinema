import Link from "next/link";
import styles from "@/styles/films.module.scss";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9b17c70efd646681f04f06f1a3fc40ed&page=1-2"
  );
  const data = await res.json();
  const res2 = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9b17c70efd646681f04f06f1a3fc40ed&page=2"
  );
  const data2 = await res2.json();
  const dataAll = [...data.results, ...data2.results];

  const paths = dataAll.map((film) => {
    return {
      params: { id: film.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9b17c70efd646681f04f06f1a3fc40ed`
  );
  const data = await res.json();

  return {
    props: { film: data },
  };
};

const Details = ({ film }) => {
  console.log("details film >>>>", film);

  const date = ["01.04-30.04", "15.03-15.05", "31.03-20.05"];

  let rand = Math.floor(Math.random() * date.length);

  return (
    <div className={styles.SingleMain}>
      <h4 className={styles.detailTitle}>Dettaglio film</h4>
      <div className={styles.singleFilm}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
            alt={`${film.title}`}
            width="250"
            height="150"
            Layout="responsive"
          ></Image>
        </div>
        <div className={styles.filmDetails}>
          <h2>{film.original_title}</h2>
          <p>{film.overview}</p>
          <p>Date della programmazione: {date[rand]}</p>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.btn}>Compra il bigletto</div>
        <Link href="/films" className={styles.btn}>
          Torna alle sale
        </Link>
      </div>
    </div>
  );
};

export default Details;
