'use client';
import { PiMoonLight } from 'react-icons/pi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import React, { useState } from 'react';
import profilePic from '/components/image/profile-picture-1.png';
import appLogo from '/components/image/work.png';
import Image from 'next/image';
import styles from './styles.module.css';

// import Link from 'next/link';

function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navbarContainer}>
      {/*<header>*/}

      <Image
        alt={'app logo'}
        className={styles.profileImage}
        src={appLogo}
        width={40}
        height={40}
      />

      <input
        className={styles.searchInput}
        name="myInput"
        placeholder="Search"
      />
      <div className={styles.navbarRight}>
        <IoIosNotificationsOutline className={styles.navbarRightImg} />
      </div>

      <div className={styles.navbarRight}>
        <PiMoonLight className={styles.navbarRightImg} />
      </div>

      <div className={styles.navbarRight} onClick={toggle}>
        <Image
          className={styles.profileImage}
          src={profilePic}
          width={40}
          height={40}
          alt={'Picture of the author'}
        />

        {/*{isOpen && (*/}
        {/*  <ul className={'ulElement'}>*/}
        {/*    <Image*/}
        {/*      className={'profileImage'}*/}
        {/*      src={profilePic}*/}
        {/*      width={500}*/}
        {/*      height={500}*/}
        {/*      alt="Picture of the author"*/}
        {/*    />*/}

        {/*    <span className={'profileName'}>Zeynep Ünal</span>*/}

        {/*    <hr className={'hrElement'} />*/}
        {/*    <li className={'liElement'}>*/}
        {/*      <BsPersonGear />*/}
        {/*      Profil Ayarları*/}
        {/*    </li>*/}
        {/*    <li className={'liElement'}>*/}
        {/*      <LuSettings />*/}
        {/*      Genel Ayarlar*/}
        {/*    </li>*/}
        {/*    <li className={'liElement'}>*/}
        {/*      <LiaHandsHelpingSolid />*/}
        {/*      Yardım*/}
        {/*    </li>*/}

        {/*    <li className={'liElement'}>*/}
        {/*      <GrCircleQuestion />*/}
        {/*      Sıkça Sorulan Sorular*/}
        {/*    </li>*/}

        {/*    <li className={'liElement'}>*/}
        {/*      <IoExitOutline />*/}
        {/*      Çıkış Yap*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*)}*/}
      </div>
      {/*</header>*/}
    </div>
  );
}

export default Header;
