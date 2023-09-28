'use client';
import * as React from 'react';
import styles from './style.module.css';
import Link from "next/link";
import {IoRestaurantOutline} from "react-icons/io5";
import {BsPersonGear} from "react-icons/bs";
import {VscGraphLine} from "react-icons/vsc";
import {TbQuestionMark} from "react-icons/tb";
import {LiaHandshake} from "react-icons/lia";

const drawerWidth = 240;

function SidebarTemplate({children}) {
  return (
    <div className={styles.sidebar}>
      <Link href={"/restaurants/ledkfjldf/manage"}>
        <IoRestaurantOutline className={styles.iconStyle}/>
        Restaurantlarım</Link>
      <Link href={"/"}>
        <BsPersonGear className={styles.iconStyle}/>
        Profili Düzenle</Link>
      <Link href={"/"}>
        <VscGraphLine className={styles.iconStyle}/>
        Analizlerim</Link>
      <Link href={"/"}>
        <TbQuestionMark className={styles.iconStyle}/>
        Sıkça Sorulan Sorular</Link>
      <Link href={"/"}>
        <LiaHandshake className={styles.iconStyle}/>
        Yardım</Link>
      {/*<Link href={"/"}>Restaurantlarım</Link>*/}
    </div>

  );
}

export default SidebarTemplate;
