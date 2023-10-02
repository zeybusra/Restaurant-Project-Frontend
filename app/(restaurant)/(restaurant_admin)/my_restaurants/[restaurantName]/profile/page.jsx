'use client'
import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import {PiPhoneCallLight} from 'react-icons/pi';
import {CiMail} from 'react-icons/ci';
import {SlLocationPin} from 'react-icons/sl';
import {MdOutlineAddAPhoto} from 'react-icons/md';
import {RxInfoCircled} from "react-icons/rx";
import restaurantImage1 from '/components/image/restaurant-logo-kirpi.png';
import {Input} from '@nextui-org/react';
import Link from "next/link";

export default function Profile({params}) {

  function uploadToClient(event) {
    console.log("uploadToClient");
    console.log(event.target.files[0]);
  }

  return (
    <div className={styles.container}>

      <div className={styles.cardContainer}>
        <div className={styles.editRestaurantInfo}>
          <RxInfoCircled className={styles.infoAboutIcon}/>
          <div style={{display: "flex", flexDirection: "column"}}>
            <span style={{fontWeight: "600"}}>Restaurant Bilgilerini Girin.</span>
            <span>Lütfen restaurant bilgilerini eksiksiz ve doğru giriniz. Bu bilgiler aynı zamanda menü ekranında gösterilecektir.</span>
          </div>
        </div>

        <h2 className={styles.restaurantTitle}>Restaurant Bilgileri</h2>

        <div className={styles.cardBody}>

          <div style={{marginTop: "30px"}}>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "35px"}}>
              <Input placeholder={"Restaurant ismini giriniz..."} label="Restaurant İsmi" value={"KİRPİ / SUADİYE"} labelPlacement={"outside"} size={`lg`}/>

            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "35px"}}>
              {/*<MdOutlineAddAPhoto className={styles.cardIcon}/>*/}
              <Input type={"file"} placeholder={"Profil resmi seçiniz..."} label={"Logo"} labelPlacement={"outside"}  size={`lg`}/>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginBottom:"35px"}}>
              <div style={{width:"45%"}}>
                {/*<PiPhoneCallLight className={styles.cardIcon}/>*/}
                <Input placeholder={"Adres bilgilerini giriniz..."} label="Adres" labelPlacement={"outside"}  size={`lg`}/>
              </div>

              <div style={{width:"45%"}}>
                <Input placeholder={"Wifi Şifresini giriniz..."} label="Wifi Şifresi" labelPlacement={"outside"}  size={`lg`}/>
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginBottom:"35px"} }>
              <div style={{width:"45%"}}>
                {/*<PiPhoneCallLight className={styles.cardIcon}/>*/}
                <Input className={styles.foodItemInput} placeholder={"Telefon bilgilerini giriniz..."}
                       label="Telefon" labelPlacement={"outside"}  size={`lg`}></Input>
              </div>

              <div style={{width:"45%"}}>
                {/*<CiMail className={styles.cardIcon}/>*/}
                <Input className={styles.foodItemInput} placeholder={"Mail bilgilerini giriniz..."}
                       label="Mail" labelPlacement={"outside"}  size={`lg`}></Input>
              </div>
            </div>



            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginBottom:"35px"}}>
              <div style={{width:"45%"}}>
                <Input className={styles.foodItemInput} placeholder={"link veya kullanıcı bilgisi giriniz..."}
                       label="Instagram" labelPlacement={"outside"} size={`lg`}></Input>
              </div>

              <div style={{width:"45%"}}>
                <Input className={styles.foodItemInput} placeholder={"link veya kullanıcı bilgisi giriniz..."}
                       label="Facebook" labelPlacement={"outside"} size={`lg`}></Input>
              </div>
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
