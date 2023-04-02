import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/films.module.scss";
import FilmCard from "../../../components/filmCard/FilmCard";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9b17c70efd646681f04f06f1a3fc40ed&page=1"
  );
  const data = await res.json();
  const res2 = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9b17c70efd646681f04f06f1a3fc40ed&page=2"
  );
  const data2 = await res2.json();

  return {
    props: { filmsSala1: data.results, filmsSala2: data2.results },
  };
};

const Films = ({ filmsSala1, filmsSala2 }) => {
  console.log(filmsSala1);
  console.log(filmsSala2);
  return (
    <>
      <Head>
        <title> Cinema | Our films </title>
        <meta name="title" content="cinema films" />
      </Head>
      <div>
        <h1 className={styles.cardsTitle}>Our films</h1>
        <h2 className={styles.salaNum}>Sala 1</h2>
        <div className={styles.cardsContainer}>
          {filmsSala1.map((film, i) => {
            return (
              <Link href={`/films/${film.id}`} key={film.id}>
                <FilmCard film={film} />
              </Link>
            );
          })}
        </div>
        <h2 className={styles.salaNum}>Sala 2</h2>
        <div className={styles.cardsContainer}>
          {filmsSala2.map((film, i) => {
            return (
              <Link href={`/films/${film.id}`} key={film.id}>
                <FilmCard film={film} />
              </Link>
            );
          })}
        </div>
        <div className={styles.cardsContainer}>
          <Link href="/" className={styles.btn}>
            Alla Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Films;
