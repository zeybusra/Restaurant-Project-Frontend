'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import styles from './style.module.css';
import Image from "next/image";
import {IoRestaurantOutline} from "react-icons/io5";
import {SlLocationPin} from "react-icons/sl";
import {PiPhoneCallLight} from "react-icons/pi";
import {CiMail} from "react-icons/ci";
import {IoAddOutline} from "react-icons/io5";
import restaurantImage1 from "/components/image/restaurant-logo-kirpi.png";
import {Input} from "@nextui-org/react";
import Link from "next/link";



export default function MyRestaurants({params}) {

  const [onHover, setOnHover] = React.useState(false);
  const [appendedContent, setAppendedContent] = useState([]);
  const [addRestaurantModalOpen, setAddRestaurantModalOpen] = useState(false);

  // const [clickSaveButton, setClickSaveButton] = useState(false);

  function stopScrollPage() {
    document.body.style.overflowY = 'scroll';
    setAddRestaurantModalOpen(false);
  }


  const onMouseEnter = () => {
    console.log("onMouseEnter");
    globalThis.sidebarType = '2';
    setOnHover(true);
  }

  const onMouseLeave = () => {
    console.log("onMouseLeave");
    globalThis.sidebarType = '1';
    setOnHover(false);
  }

  const handleDivClick = () => {
    // Create the HTML content you want to append
    document.body.style.overflowY = 'hidden';
    setAddRestaurantModalOpen(true);
  };



    // const htmlContent = (
    //   <div key={appendedContent.length}>
    //     <div className={styles.cardContainer}>
    //       <div className={styles.cardHeader}>
    //         <Input placeholder={"Restaurant ismini giriniz..."}/>
    //       </div>
    //       <div className={styles.cardBody}>
    //         <Image src={restaurantImage1} alt={"restaruant image"} width={100} height={100}/>
    //         <div style={{marginTop: "30px"}}>
    //           <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "5px"}}>
    //             <SlLocationPin className={styles.cardIcon}/>
    //             <Input placeholder={"Adres bilgilerini giriniz..."}/>
    //           </div>
    //
    //           <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "5px"}}>
    //             <PiPhoneCallLight className={styles.cardIcon}/>
    //             <Input placeholder={"Telefon bilgilerini giriniz..."}/>
    //           </div>
    //
    //           <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "5px"}}>
    //             <CiMail className={styles.cardIcon}/>
    //             <Input placeholder={"Mail bilgilerini giriniz..."}/>
    //           </div>
    //
    //           <button onClick={() => setClickSaveButton(true)} className={styles.inputSaveButton}>Kaydet</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // setAppendedContent(prevContent => [...prevContent, htmlContent]);



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
        <div onClick={handleDivClick} style={{height: "100%"}} onMouseLeave={onMouseLeave}
             onMouseEnter={onMouseEnter}>
          {onHover ? <div className={styles.addRestaurantButton}><span className={styles.addRestaurantButtonHover}>Restaurant Ekle</span>
            </div> :
            <div className={styles.addRestaurantButton}><IoAddOutline className={styles.addRestaurantIcon}/></div>}
        </div>
      </div>
      <div className={styles.cardGridContainer}>

        {restaurantData.map((item) => (
          <div className={styles.cardContainer}>
            <Link href="/my_restaurants/kirpi" className={styles.cardHeader}>
              <h1>{item.name}</h1>
            </Link>
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

        {/*{appendedContent}*/}
      </div>

      {/*Restaurant Name Modal*/}
      {addRestaurantModalOpen && (
        <div className={styles.addRestaurantModal}>
          <h2 classNames={styles.addRestaurantTitle}>Restaurant Bilgileri</h2>
          <Input placeholder={"Restaurant ismini giriniz..."}/>

          <div className={styles.formButtons}>
          <button onClick={stopScrollPage}  className={styles.inputCloseButton}>Kapat</button>
          <button onClick={stopScrollPage} className={styles.inputSaveButton}>Kaydet</button>
          </div>

          <button
            onClick={stopScrollPage}
            className={styles.closeButton}
          >
            X
          </button>
        </div>
      )}

      <div
        onClick={stopScrollPage}
        className={`${
          addRestaurantModalOpen ? styles.overlay : styles.inactive
        }`}
      ></div>





    </div>
  );
}
