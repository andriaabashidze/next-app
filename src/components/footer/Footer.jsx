import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div >

    <div className={styles.container}>
      <div className={styles.one}>
      aaa
      </div>
      <div className={styles.socnets}>
      <Image src='/1.png' width={25} height={25} alt="facebook"/>
        <Image src='/2.png' width={25} height={25} alt="insta"/>
        <Image src='/3.png' width={25} height={25} alt="twitter"/>
        <Image src='/4.png' width={25} height={25} alt="youtube"/>
      </div>
    </div>

    </div>
  )
}

export default Footer