'use client'
import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import {PiPhoneCallLight} from 'react-icons/pi';
import {CiMail} from 'react-icons/ci';
import {SlLocationPin} from 'react-icons/sl';
import {MdOutlineAddAPhoto} from 'react-icons/md';
import restaurantImage1 from '/components/image/restaurant-logo-kirpi.png';
import {Input} from '@nextui-org/react';
import Link from "next/link";

export default function Profile({params}) {

  function uploadToClient(event) {
    console.log("uploadToClient");
    console.log(event.target.files[0]);
  }

  return (
    <div className={'container'}>

      <div className={styles.cardContainer}>
        <h2 className={styles.restaurantTitle}>Restaurant Bilgileri</h2>

        <div className={styles.cardHeader}>

          <Input value={"lorem"} placeholder={"Restaurant ismini giriniz..."}/>
        </div>
        <div className={styles.cardBody}>

          <div style={{marginTop: "30px"}}>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "15px"}}>
              <MdOutlineAddAPhoto className={styles.cardIcon} />
              <Input type={"file"} placeholder={"Profil resmi seçiniz..."}/>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "15px"}}>
              <SlLocationPin className={styles.cardIcon}/>
              <Input placeholder={"Adres bilgilerini giriniz..."}/>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "15px"}}>
              <PiPhoneCallLight className={styles.cardIcon}/>
              <Input value={"lorem"} placeholder={"Telefon bilgilerini giriniz..."}/>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "15px"}}>
              <CiMail className={styles.cardIcon}/>
              <Input value={"lorem"} placeholder={"Mail bilgilerini giriniz..."}/>
            </div>

            <div className={styles.formButtons}>
              {/*<Link href={} placeholder={ "Kaydet"}/>Kapat>*/}
              <button className={styles.inputCloseButton}>Kapat</button>
              <button className={styles.inputSaveButton}>Kaydet</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
