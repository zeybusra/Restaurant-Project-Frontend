'use client';
import React, { useState, useEffect } from 'react';
import styles from '/app/(menu)/style.module.css';
import Image from 'next/image';
import { PiPhoneCall } from 'react-icons/pi';
import { BsCart3 } from 'react-icons/bs';
import appLogo from '/components/image/waiter-call-icon-black.png';
import callWaiter from '/components/image/call-waiter.png';
import waiterBell from '/components/image/desk-bell.png';
import fastWaiter from '/components/image/fast-waiter.png';
import waiterCallIcon from '/components/image/waiter-icon-1.png';
import Link from 'next/link';

export default function MenuLayout({ children }) {
  const callWaiter = () => {
    setIsWaiterModalActive(true);
    document.body.style.overflowY = 'hidden';
  };

  const [isWaiterModalActive, setIsWaiterModalActive] = useState(false);
  const [isCallWaiter, setIsCallWaiter] = useState(false);
  const [isSelectedButtons, setIsSelectedButtons] = useState(new Set([]));
  const [isWaiterCheckModalActive, setIsWaiterCheckModalActive] =
    React.useState(false);
  const selectedButtons = (e) => {
    const selectedItem = e.target;
    if (isSelectedButtons.has(selectedItem)) {
      isSelectedButtons.delete(selectedItem);
      selectedItem.style.border = '1px solid #6e6e6e';
    } else {
      isSelectedButtons.add(selectedItem);
      selectedItem.style.border = '3px solid #6a8b29';
    }
  };
  const checkWaiterCall = () => {
    setIsWaiterModalActive(false);
    setIsCallWaiter(false);
    setIsWaiterCheckModalActive(true);
    const selectedButtonsArray = isSelectedButtons;
    console.log(selectedButtonsArray);
    console.log(Object.keys(selectedButtonsArray).length);
    document.body.style.overflowY = 'scroll';

    // if (Object.keys(selectedButtonsArray).length > 0) {
    console.log('selectedButtonsArray is full');

    for (const [key, value] of Object.entries(selectedButtonsArray)) {
      console.log(`${key}: ${value}`);
    }

    // selectedButtonsArray.values().forEach((item) => {
    //   item.style.border = '3px solid #6a8b29';
    // });
    // } else {
    //   console.log('selectedButtonsArray is empty');
    // }
  };

  const showWaiterCheckModal = () => {
    setIsCallWaiter(true);
  };

  return (
    <div className="menuContainer">
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <span>MenuApp</span>
          <Link href="/menu/1234">
            <Image
              className={styles.profileImage}
              src={appLogo}
              width={40}
              height={40}
              alt={'profileImage'}
            />
          </Link>
        </div>

        <div className={styles.navbarRight}>
          <span className={styles.tableInfo}>Table 8</span>
          <Image
            src={waiterBell}
            alt={'call-waiter'}
            onClick={callWaiter}
            className={`callWaiter ${styles.navbarRightImg}`}
            width={45}
            height={45}
          />

          <Link href="/menu/1234/cart">
            <BsCart3
              style={{ width: '30px', height: '30px' }}
              className={styles.navbarRightImg}
            />
          </Link>
        </div>
        <div
          onClick={checkWaiterCall}
          className={`${
            isWaiterModalActive ? styles.overlay : styles.inActive
          }`}
        ></div>

        {/*Garsonu çağırma butonuna basılmadan önceki modal*/}
        <div
          className={` ${styles.callWaiterContainer} ${
            isWaiterModalActive ? styles.active : styles.inActive
          } `}
        >
          {/*<------------------------BEFORE-------------------------------->*/}
          <div
            className={`${styles.callWaiterContent} ${
              isCallWaiter ? styles.inActive : styles.active
            }`}
          >
            {/*<---------------------------CHECK WAITER MODAL----------------------------->*/}

            <div
              className={`${
                isWaiterCheckModalActive ? styles.active : styles.inActive
              }`}
            >
              <Image
                src={fastWaiter}
                width={100}
                height={100}
                alt={'fast-waiter'}
              />

              <span>Garsonu çağırdınız. Lütfen bekleyiniz</span>
              <div className={styles.basicWishes}>
                <button onClick={selectedButtons}>Peçete İstiyorum</button>
                <button onClick={selectedButtons}>
                  Islak Mendil İstiyorum
                </button>
                <button onClick={selectedButtons}>Servis İstiyorum</button>
                <button onClick={selectedButtons}>Hesabı İstiyorum</button>
              </div>
              <button className={styles.rejectWaiterButton}>
                Garsonu Çağırmayı iptal et
              </button>
            </div>

            {/*<---------------------------CHECK WAITER MODAL----------------------------->*/}
            <div
              className={`${
                isWaiterCheckModalActive ? styles.inActive : styles.active
              }`}
            >
              <Image
                src={waiterBell}
                width={100}
                height={100}
                alt={'waiter-bell'}
              />

              <span>İsteğiniz aşağıdakilerden biri mi?</span>

              <div className={styles.basicWishes}>
                <button onClick={selectedButtons}>Peçete İstiyorum</button>
                <button onClick={selectedButtons}>
                  Islak Mendil İstiyorum
                </button>
                <button onClick={selectedButtons}>Servis İstiyorum</button>
                <button onClick={selectedButtons}>Hesabı İstiyorum</button>
              </div>
              <button
                onClick={showWaiterCheckModal}
                className={styles.callWaiterButton}
              >
                Garsonu Çağır
              </button>
            </div>
          </div>

          {/*<---------------------------AFTER----------------------------->*/}
          <div
            className={`${styles.callWaiterContent} ${
              isCallWaiter ? styles.active : styles.inActive
            }`}
          >
            <Image
              src={callWaiter}
              width={100}
              height={100}
              alt={'callWaiter'}
            />
            <span
              style={{
                marginRight: '15%',
                marginLeft: '15%',
                textAlign: 'center',
                lineHeight: '1.5',
                marginTop: '30px',
              }}
            >
              Garsonu çağırdınız.En kısa süre içerisinde masanızla ilgilenen
              garson yanınıza gelecektir.
            </span>
          </div>
          {/*<-------------------------------------------------------->*/}

          {/*Close Modal Button*/}
          <button onClick={checkWaiterCall} className={styles.modalCloseButton}>
            X
          </button>
        </div>
      </div>

      <div className={'container fluid'}>{children}</div>
    </div>
  );
}
