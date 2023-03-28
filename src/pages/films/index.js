import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/pizzas.module.scss";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/momonastia/nextjs-restaurant/items"
  );
  const data = await res.json();

  return {
    props: { pizzas: data },
  };
};

const Pizza = ({ pizzas }) => {
  const menuVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Pizza restaurant | Our menu </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1 className={styles.cardsTitle}>Our pizzas</h1>
        <div className={styles.cardsContainer}>
          {pizzas.map((pizza, i) => {
            return (
              <Link href={`/products/${pizza.id}`} key={pizza.id}>
                <motion.div
                  className={styles.pizzaCard}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
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
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pizza;
