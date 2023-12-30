import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar'
import Button from '../components/button/Button'
import Image from 'next/image'
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          HEEEEEEEEEEEEELP HHHHHHHEEEEEEEEEEEEEEEEEEEEEEEELP           HHHHHHHHHHHHEEEEEEEEEEEEEEEEEEEELP
        </p>
        <Button title={"See Our Works"} url={'/portfolio'}/>
      </div>
      <div className={styles.item}>
      <Image
        src={Hero}
        alt="hero" className={styles.img}/>
      </div>
    </main>
  )
}