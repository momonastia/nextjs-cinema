import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/films.module.scss";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=9b17c70efd646681f04f06f1a3fc40ed"
  );
  const data = await res.json();

  return {
    props: { films: data },
  };
};

const Films = ({ films }) => {
  console.log(films);
  return (
    <>
      <Head>
        <title> Cinema | Our films </title>
        <meta name="title" content="cinema films" />
      </Head>
      <div>
        <h1 className={styles.cardsTitle}>Our films</h1>
        {/*    <div className={styles.cardsContainer}>
          {films.map((film, i) => {
            return {
              <Link href={`/films/${film.id}`} key={pizza.id}>
                <div
                  className={styles.pizzaCard}
                  
                >
                  <div className={styles.imageContainer}>
                   <Image
                      src={`${pizza.image}`}
                      alt={`${pizza.name}`}
                      width="250"
                      height="150"
                      Layout="responsive"
                    ></Image> 
                  </div>
                  <div className={styles.pizzaInfo}>
                    <h4>{pizza.name}</h4>
                    <p>
                      {pizza.desc.length > 50
                        ? `${pizza.desc.substring(0, 50)}...`
                        : pizza.desc}{" "}
                    </p>
                  </div>
                </div>
              </Link>
            };
          })}
        </div> */}
      </div>
    </>
  );
};

export default Films;
