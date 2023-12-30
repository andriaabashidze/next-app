import Button from "@/components/button/Button";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          fill={true}
          alt="group photo"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgdesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <section className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam lure esse tempora beatae. A
            suscipit eos. Animi quibusdam dum omnis officis voluptatum quo ea
            eveniet? Lorem ipsur dolor sit amet consectetur adipisteing elf.
            Ducimus quae dolor, optio voluptatibus magnam lure esse tempora
            beatae, a suscipit eds Animi quibusdam cum omnis officis
            <br></br>
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Duci quae dolor, optio voluptatibus magnamiure
            esse tempora beatae, a suscipit eos quibusdam cum omnis officiis
            voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.item}>
          <h1>What We Do?</h1>
          <p>
            Lorem psum dolor sit amer consectetur adipisicing elit. Ducimus quae
            dolor, optio voluptatibus magnam lure esse tempora beatae, a
            suscipit eos Animi quibusdam cum omnis officis voluptatum quo ea
            eveniet? Lorem psum dolor sit amet consectetur adipisicing elit.
            Creative Jiustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handly
            <br />
            <br />
            -Mobile Apps
            <br />
            <br />
          </p>
          <Button title={"contact"} url={'/contact'}/>
        </div>
      </section>
    </main>
  );
}

export default page;
