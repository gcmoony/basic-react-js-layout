import picture from "/vite.svg"
import styles from "./../../App.module.css"

export const About = () => {
  return (
    <>
      <h1 className={styles.h1}>About</h1>
      <img
        className={styles.img}
        src={picture}
        height={100}
      />
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque minima
        illum laudantium voluptatibus explicabo, tempore exercitationem, magnam
        atque rem temporibus hic debitis? Exercitationem, nemo commodi.
      </p>
    </>
  )
}
