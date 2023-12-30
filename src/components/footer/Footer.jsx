import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";


function Footer() {
  return (
    <div className={styles.container}>
      {/* {gamarjoba} */}
      {/* {rogor khar} */}
      <div>@all rights reserved</div>
      <div className={styles.socialNetworks}>
        <Link href={"https://www.facebook.com/"} target="_blank">
          <Image
            url={"https://www.facebook.com/"}
            src="/1.png"
            width={15}
            className={styles.socialIcon}
            height={15}
            alt="facebook "
          />
        </Link>
        <Link
          href={"https://www.instagram.com/accounts/login/"}
          target="_blank"
        >
          <Image
            src="/2.png"
            width={15}
            className={styles.socialIcon}
            height={15}
            alt="instagram "
          />
        </Link>
        <Link href={"https://twitter.com/"} target="_blank">
          <Image
            src="/3.png"
            width={15}
            className={styles.socialIcon}
            height={15}
            alt="x "
          />
        </Link>
        <Link href={"https://www.youtube.com/"} target="_blank">
          <Image
            src="/4.png"
            width={15}
            className={styles.socialIcon}
            height={15}
            alt="youtube "
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
