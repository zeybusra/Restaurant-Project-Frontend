import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import restaurantLogo from '/components/image/restaurant-logo-2.png';
import { PiFacebookLogoLight } from 'react-icons/pi';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { PiTwitterLogoLight } from 'react-icons/pi';
import Link from 'next/link';

function Footer({ children }) {
  return (
    <div className={styles.footerTemplate}>
      <div className={styles.footerContainer}>
        <Link href={'/'}>
          <PiFacebookLogoLight />
        </Link>
        <Link href={'/'}>
          <PiInstagramLogoLight />
        </Link>
        <Link href={'/'}>
          <PiLinkedinLogoLight />
        </Link>
        <Link href={'/'}>
          <PiTwitterLogoLight />
        </Link>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.insideContainer}>
          <Image
            src={restaurantLogo}
            alt={'restaurant logo'}
            width={40}
            height={40}
            className={styles.restaurantLogo}
          />
          <span>Restaurant App</span>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div>© Copyright Restaurant App Co.</div>
      </div>
    </div>
  );
}

export default Footer;
