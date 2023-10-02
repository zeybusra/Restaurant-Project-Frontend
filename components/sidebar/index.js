'use client';
import * as React from 'react';
import styles from './style.module.css';
import Link from "next/link";
import {IoRestaurantOutline} from "react-icons/io5";
import {BsPersonGear} from "react-icons/bs";
import {VscGraphLine} from "react-icons/vsc";
import {TbQuestionMark} from "react-icons/tb";
import {LiaHandshake} from "react-icons/lia";

function SidebarTemplate({children, sidebarType}) {

  const sidebarDetailContent = [
    {
      name: "Profil Ayarları",
      icon: <IoRestaurantOutline className={styles.iconStyle}/>,
      link: "/my_restaurants/kirpi/profile"
    },
    {
      name: "Menü Ayarları",
      icon: <BsPersonGear className={styles.iconStyle}/>,
      link: "/my_restaurants/kirpi/menu"
    },
    {
      name: "Rezervasyonlarım",
      icon: <VscGraphLine className={styles.iconStyle}/>,
      link: "/my_restaurants/kirpi/reservations"
    },
    {
      name: "Analizlerim",
      icon: <VscGraphLine className={styles.iconStyle}/>,
      link: "/my_restaurants/kirpi/analysis"
    }
  ];


  const sidebarAdminManageContent = [
    {
      name: "Restaurantlarım",
      icon: <IoRestaurantOutline className={styles.iconStyle}/>,
      link: "/restaurants/ledkfjldf/manage"
    },
    {
      name: "Profilim",
      icon: <BsPersonGear className={styles.iconStyle}/>,
      link: "/"
    },
    {
      name: "Analizlerim",
      icon: <VscGraphLine className={styles.iconStyle}/>,
      link: "/"
    },
    {
      name: "Sıkça Sorulan Sorular",
      icon: <TbQuestionMark className={styles.iconStyle}/>,
      link: "/"
    },
    {
      name: "Yardım",
      icon: <LiaHandshake className={styles.iconStyle}/>,
      link: "/"
    }
  ]


  const sidebarDefaultContent = [
    {
      name: "Restaurantlarım",
      icon: <IoRestaurantOutline className={styles.iconStyle}/>,
      link: "/restaurants/ledkfjldf/manage"
    },
    {
      name: "Profilim",
      icon: <BsPersonGear className={styles.iconStyle}/>,
      link: "/"
    },
    {
      name: "Analizlerim",
      icon: <VscGraphLine className={styles.iconStyle}/>,
      link: "/"
    },
    {
      name: "Sıkça Sorulan Sorular",
      icon: <TbQuestionMark className={styles.iconStyle}/>,
      link: "/"
    },
    {
      name: "Yardım",
      icon: <LiaHandshake className={styles.iconStyle}/>,
      link: "/"
    }
  ]

  const sidebarMap = {
    '1': sidebarDefaultContent,
    '2': sidebarDetailContent,
    '3': sidebarAdminManageContent
  }

  return (
    <div className={styles.sidebar}>
      <span style={{textAlign:"center", fontSize:"18px", marginTop:"20px", marginBottom:"10px"}}>KİRPİ</span>
      <hr></hr>

      {sidebarMap[sidebarType].map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            {item.icon}
            {item.name}
          </Link>
        );
      })}
    </div>

  );
}

export default SidebarTemplate;
