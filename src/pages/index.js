import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=9b17c70efd646681f04f06f1a3fc40ed&language=en-US&page=2"
  );
  const data = await res.json();

  return {
    props: { films: data },
  };
};

export default function Home({ films }) {
  console.log(films);
  return (
    <>
      <Head>
        <title>Cinema "CineMille"</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Top films</h2>
        <div className={styles.cardsContainer}>
          {films.results.map((film, i) => {
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
        <Link href="/films" className={styles.btn}>
          Alle sale
        </Link>
      </main>
    </>
  );
}
