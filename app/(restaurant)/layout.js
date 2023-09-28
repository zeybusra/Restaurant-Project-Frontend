import React from 'react';
import styles from '/app/(restaurant)/style.module.css';
import Header from 'components/header';
import Footer from 'components/footer';
import SidebarTemplate from '../../components/sidebar';
import Image from 'next/image';
import appLogo from '../../components/image/waiter-call-icon-black.png';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { PiMoonLight } from 'react-icons/pi';
import profilePic from '../../components/image/profile-picture-1.png';

export default function RestaurantLayout({ children }) {
  return (
    <div className={styles.gridTemplate}>
      {/*<Header className={styles.mainHeader} />*/}

      {/*HEADER COMPONENT CONTENT*/}
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
      {/*HEADER COMPONENT CONTENT*/}

      <SidebarTemplate className={styles.sidebar} />

      <div className={styles.content}>{children}</div>

      <Footer className={styles.mainFooter} />
    </div>
  );
}
