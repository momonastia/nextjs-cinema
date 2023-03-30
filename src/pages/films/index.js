import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/films.module.scss";

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
              </Link>
            );
          })}
        </div>
        <h2 className={styles.salaNum}>Sala 2</h2>
        <div className={styles.cardsContainer}>
          {filmsSala2.map((film, i) => {
            return (
              <Link href={`/films/${film.id}`} key={film.id}>
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
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Films;
