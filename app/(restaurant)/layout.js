"use client";
import React from 'react';
import styles from '/app/(restaurant)/style.module.css';
import Header from 'components/header';
import Footer from 'components/footer';
import SidebarTemplate from '/components/sidebar';
import Image from 'next/image';
import appLogo from '../../components/image/waiter-call-icon-black.png';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {PiMoonLight} from 'react-icons/pi';
import profilePic from '/components/image/profile-picture-1.png';
import {usePathname} from "next/navigation";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

export default function RestaurantLayout({children}) {

  const path = usePathname()
  const lastPath = path.split('my_restaurants')[1];
  let sidebarType;
  if (lastPath?.length > 1) {
    sidebarType = '2';
  } else {
    sidebarType = '1';
  }

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
          {/*<div className={styles.navbarRight}>*/}
          {/*  <IoIosNotificationsOutline className={styles.navbarRightImg}/>*/}
          {/*</div>*/}

          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="text"
              >
                <IoIosNotificationsOutline className={styles.navbarRightImg}/>
              </Button>

              {/*<div className={styles.navbarRight}>*/}
              {/*  <IoIosNotificationsOutline className={styles.navbarRightImg}/>*/}
              {/*</div>*/}

            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
            </DropdownMenu>
          </Dropdown>


          <div className={styles.navbarRight}>
            <PiMoonLight className={styles.navbarRightImg}/>
          </div>

          <div className={styles.navbarRight}>


            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="text"
                >
                  <Image
                    className={styles.profileImage}
                    src={profilePic}
                    width={40}
                    height={40}
                    alt={'Picture of the author'}
                  />
                </Button>

              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Profili Düzenle</DropdownItem>
                <DropdownItem key="new">Profili Düzenle</DropdownItem>
                <DropdownItem key="edit" className="text-primary" color="primary" >
                  Çıkış Yap
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>


          </div>
        </div>
      </div>
      {/*HEADER COMPONENT CONTENT*/}

        <SidebarTemplate className={styles.sidebar} sidebarType={sidebarType}/>

      <div className={styles.content}>{children}</div>

      <Footer className={styles.mainFooter}/>
    </div>
  );
}
