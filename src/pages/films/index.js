import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/films.module.scss";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9b17c70efd646681f04f06f1a3fc40ed&page=1"
  );
  const data = await res.json();

  return {
    props: { films: data.results },
  };
};

const Films = ({ films }) => {
  console.log(films);
  console.log(films);
  return (
    <>
      <Head>
        <title> Cinema | Our films </title>
        <meta name="title" content="cinema films" />
      </Head>
      <div>
        <h1 className={styles.cardsTitle}>Our films</h1>
        <div className={styles.cardsContainer}>
          {films.map((film, i) => {
            return (
              <Link href={`/films/${film.id}`} key={film.id}>
                <div className={styles.pizzaCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                      alt={`${film.title}`}
                      width="250"
                      height="150"
                      Layout="responsive"
                    ></Image>
                  </div>
                  <div className={styles.pizzaInfo}>
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
