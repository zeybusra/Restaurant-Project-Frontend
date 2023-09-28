'use client';
import { PiMoonLight } from 'react-icons/pi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import React, { useState } from 'react';
import profilePic from '/components/image/profile-picture-1.png';
import appLogo from '/components/image/waiter-call-icon-black.png';
import Image from 'next/image';
import styles from './styles.module.css';

// import Link from 'next/link';

function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.navbarLeft}>
        <Image
          alt={'app logo'}
          className={styles.profileImage}
          src={appLogo}
          width={40}
          height={40}
        />
      </div>

      <div className={styles.navbarRightContainer}>
        <div className={styles.navbarRight}>
          <IoIosNotificationsOutline className={styles.navbarRightImg} />
        </div>

        <div className={styles.navbarRight}>
          <PiMoonLight className={styles.navbarRightImg} />
        </div>

        <div className={styles.navbarRight}>
          <Image
            className={styles.profileImage}
            src={profilePic}
            width={40}
            height={40}
            alt={'Picture of the author'}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
