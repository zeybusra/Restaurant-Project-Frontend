'use client'
import React from 'react';
import styles from './style.module.css';
import DataTableList from "../../../../../../components/data-table";
import Image from "next/image";
import {IoRestaurantOutline} from "react-icons/io5";
import {SlLocationPin} from "react-icons/sl";
import {PiPhoneCallLight} from "react-icons/pi";
import {CiMail} from "react-icons/ci";
import {IoAddOutline} from "react-icons/io5";
import restaurantImage1 from "../../../../../../components/image/restaurant-logo-kirpi.png";


export default function Profile({params}) {

  const [onHover, setOnHover] = React.useState(false);

  const onMouseEnter = () => {
    setOnHover(true);
  }

  const onMouseLeave = () => {
    setOnHover(false);
  }

  const restaurantData = [
    {
      id: 1,
      name: 'KİRPİ / SUADİYE',
      address: 'Suadiye Mahallesi Kardeşler Apt No.425/1-2, 34740 Kadıköy',
      phone: '0532 123 45 67',
      email: 'kirpiSuadiye@gmail.com',
      status: 'active',
      image: restaurantImage1,
    },
    {
      id: 2,
      name: 'KİRPİ / KADIKÖY',
      address: 'Suadiye Mahallesi Kardeşler Apt No.425/1-2, 34740 Kadıköy',
      phone: '0532 123 45 67',
      email: 'kirpiKadıkoy@gmail.com',
      status: 'active',
      image: restaurantImage1,
    },
    {
      id: 3,
      name: 'KİRPİ / KARTAL',
      address: 'Suadiye Mahallesi Kardeşler Apt No.425/1-2, 34740 Kadıköy',
      phone: '0532 123 45 67',
      email: 'kirpiKartal@gmail.com',
      status: 'active',
      image: restaurantImage1,
    }
  ];




  return (
    <div className={'container'}>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.pageHeader}>
          <IoRestaurantOutline className={styles.pageIcon}/>
          Restaurantlarım</h1>
        <div style={{height:"100%"}} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
          {onHover?<div className={styles.addRestaurantButton}><span className={styles.addRestaurantButtonHover}>Restaurant Ekle</span></div>: <div className={styles.addRestaurantButton}><IoAddOutline className={styles.addRestaurantIcon}/></div>}
        </div>
      </div>
      <div className={styles.cardGridContainer}>

        {restaurantData.map((item) => (
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <h1>{item.name}</h1>
            </div>
            <div className={styles.cardBody}>
              <Image src={item.image} alt={"restaruant image"} width={100} height={100}/>
              <div style={{marginTop: "30px"}}>
              <span>
                <SlLocationPin className={styles.cardIcon}/>
                {item.address}</span>
                <span>
                <PiPhoneCallLight className={styles.cardIcon}/>
                  {item.phone}</span>
                <span>
                <CiMail className={styles.cardIcon}/>
                  {item.email}</span>
              </div>
            </div>
          </div>
        ))
        }


      </div>
    </div>
  );
}
