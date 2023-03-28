import styles from "@/styles/films.module.scss";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9b17c70efd646681f04f06f1a3fc40ed&page=1"
  );
  const data = await res.json();

  const paths = data.results.map((film) => {
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

  return (
    <div className={styles.singleFilm}>
      <h1>{film.original_title}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt={`${film.title}`}
          width="250"
          height="150"
          Layout="responsive"
        ></Image>
      </div>
      <div>
        <p>{film.overview}</p>
      </div>
    </div>
  );
};

export default Details;
