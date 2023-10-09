'use client'
import React, {useEffect} from 'react';
import styles from './style.module.css';
import {RxInfoCircled} from "react-icons/rx";
import {Input, Spinner} from '@nextui-org/react';
import LoadingButton from "/components/loading-button";
import {Button} from "@nextui-org/react";
import {HiOutlineEye} from "react-icons/hi";
import {HiOutlineEyeOff} from "react-icons/hi";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "/components/custom-checkbox";
import {Switch} from "@nextui-org/react";


export default function Profile({params}) {

  const [saveButtonLoading, setSaveButtonLoading] = React.useState(false);
  const [restaurantInfo, setRestaurantInfo] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [groupSelected, setGroupSelected] = React.useState([]);


  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {

    fetch('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
      .then((response) => response.json())
      .then((data) => {
        setRestaurantInfo({
          name: "KİRPİ / SUADİYE",
          address: "Suadiye Mahallesi, Bağdat Cd. No: 469, 34740 Kadıköy/İstanbul",
          phone: "0216 302 00 00",
          email: "info@kirpi.com",
          wifi_name: "KIRPI",
          wifi_password: "12345678",
          logo: "https://www.kirpi.com.tr/wp-content/uploads/2019/12/kirpi-logo.png",
          cover_photo: "https://www.kirpi.com.tr/wp-content/uploads/2019/12/kirpi-logo.png",
          description: "Kadıköy Suadiye’de 2019 yılında açılan KİRPİ, 7 gün 24 saat hizmet veren bir mekan. Kahvaltı, öğle yemeği, akşam yemeği, atıştırmalık, içecek ve alkollü içecek seçenekleriyle her saatte uğrayabileceğiniz bir mekan. KİRPİ’de her gün farklı bir etkinlik var. Canlı müzik, DJ performansları, stand-up gösterileri, çocuk etkinlikleri, özel gün kutlamaları ve daha fazlası için takipte kalın.",
          social_media: {
            instagram: "https://www.instagram.com/kirpi_suadiye/",
            facebook: "https://www.facebook.com/kirpisuadiye",
          },
          working_hours: {
            monday:{label:"Pazartesi", startTime:"10:00", endTime:"02:00"},
            tuesday:{label:"Salı", startTime:"10:00", endTime:"02:00"},
            wednesday:{label:"Çarşamba", startTime:"10:00", endTime:"02:00"},
            thursday:{label:"Perşembe", startTime:"10:00", endTime:"02:00"},
            friday:{label:"Cuma", startTime:"10:00", endTime:"02:00"},
            saturday:{label:"Cumartesi", startTime:"10:00", endTime:"02:00"},
            sunday:{label:"Pazar", startTime:"10:00", endTime:"02:00"},
          },
          payment_methods: ['Kasada Nakit', 'Kredi Kartı', 'Sodexo', 'Ticket'],
          delivery: {
            // is_available: true,
            min_price: {label: "Minimum Sipariş Tutarı", value: 50},
            delivery_fee:{label: "Teslimat Ücreti", value: 10},
          },
        });

      });
  }, []);

  function uploadToClient(event) {
    console.log("uploadToClient");
    console.log(event.target.files[0]);
  }

  const saveProfile = () => {
    setSaveButtonLoading(true);
  }

  return (
    <div className={styles.container}>
      {restaurantInfo ? (
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

              <div className={styles.inputContainer}>
                <Input isRequired placeholder={"Restaurant ismini giriniz..."} label="Restaurant İsmi"
                       value={restaurantInfo?.name} labelPlacement={"outside"} size={`lg`}/>

              </div>

              <div className={styles.inputContainer}>
                {/*<MdOutlineAddAPhoto className={styles.cardIcon}/>*/}
                <Input type={"file"} placeholder={"Profil resmi seçiniz..."} label={"Logo"} labelPlacement={"outside"}
                       size={`lg`}/>
              </div>

              <div className={styles.inputContainer}>
                <Input type={"file"} placeholder={"Cover fotoğrafı seçiniz..."} label={"Cover Fotoğrafı"}
                       labelPlacement={"outside"}
                       size={`lg`}/>
              </div>

              <div className={styles.inputContainerFor2} style={{paddingTop: "0px"}}>

                <div style={{width: "45%"}}>
                  {/*<PiPhoneCallLight className={styles.cardIcon}/>*/}
                  <Input placeholder={"Wifi ismini giriniz..."} label="Wifi İsmi" labelPlacement={"outside"}
                         size={`lg`} value={restaurantInfo?.wifi_name}/>
                </div>

                <div style={{width: "45%"}}>
                  <Input
                    placeholder={"Wifi Şifresini giriniz..."} label="Wifi Şifresi" labelPlacement={"outside"}
                    size={`lg`} value={restaurantInfo?.wifi_password}
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <HiOutlineEye/>
                        ) : (
                          <HiOutlineEyeOff/>
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                </div>
              </div>

              <div style={{marginBottom: "30px", marginTop: "30px"}}>
                <h1 className={styles.profileTitles}>İletişim Bilgileri</h1>
                <hr></hr>

                <div className={styles.inputContainerFor2}>
                  <Input type={"text"} placeholder={"Adres bilgisini giriniz..."} label={"Adres"}
                         labelPlacement={"outside"}
                         size={`lg`} value={restaurantInfo?.address}/>
                </div>

                <div className={styles.inputContainerFor2}>
                  <div style={{width: "45%"}}>
                    {/*<PiPhoneCallLight className={styles.cardIcon}/>*/}
                    <Input isRequired className={styles.foodItemInput} placeholder={"Telefon bilgilerini giriniz..."}
                           label="Telefon" labelPlacement={"outside"} size={`lg`} value={restaurantInfo?.phone}></Input>
                  </div>

                  <div style={{width: "45%"}}>
                    {/*<CiMail className={styles.cardIcon}/>*/}
                    <Input isRequired className={styles.foodItemInput} placeholder={"Mail bilgilerini giriniz..."}
                           label="Mail" labelPlacement={"outside"} size={`lg`} value={restaurantInfo?.email}></Input>
                  </div>
                </div>

              </div>


              <div style={{marginBottom: "30px", marginTop: "30px"}}>
                <h1 className={styles.profileTitles}>Sosyal Medya Bilgileri</h1>
                <hr></hr>
                <div className={styles.inputContainerFor2}>
                  <div style={{width: "45%"}}>
                    <Input className={styles.foodItemInput} placeholder={"link veya kullanıcı bilgisi giriniz..."}
                           label="Instagram" labelPlacement={"outside"} size={`lg`}
                           value={restaurantInfo?.social_media.instagram}></Input>
                  </div>

                  <div style={{width: "45%"}}>
                    <Input className={styles.foodItemInput} placeholder={"link veya kullanıcı bilgisi giriniz..."}
                           label="Facebook" labelPlacement={"outside"} size={`lg`}
                           value={restaurantInfo?.social_media.facebook}></Input>
                  </div>
                </div>
              </div>

              <div>
                <h1 className={styles.profileTitles}>Çalışma Saatleri</h1>
                <hr></hr>
                <div className={styles.inputContainer}>

                  <Table removeWrapper aria-label="Example static collection table">
                    <TableHeader>
                      <TableColumn>Günler</TableColumn>
                      <TableColumn>Mesai Başlangıcı</TableColumn>
                      <TableColumn>Mesai Bitişi</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(restaurantInfo.working_hours).map(([item, val], index) =>
                        (
                          <TableRow key={index}>
                            <TableCell>{val.label}</TableCell>
                            <TableCell><Input size={`sm`} placeholder={val.startTime}/></TableCell>
                            <TableCell><Input size={`sm`} placeholder={val.endTime}/></TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>

                </div>
              </div>

              <div>
                <h1 className={styles.profileTitles}>Ödeme Seçenekleri</h1>
                <hr></hr>
                <div className="flex flex-col gap-1 w-full">
                  <CheckboxGroup
                    className="gap-1"
                    label="Ödeme seçeneklerinden en az birini seçiniz."
                    orientation="horizontal"
                    value={groupSelected}
                    onChange={setGroupSelected}
                    color="secondary">
                    {restaurantInfo?.payment_methods.map((item, index) =>
                      (
                        <div>
                          <CustomCheckbox className={styles.test} key={index} value={item}>{item}</CustomCheckbox>
                        </div>
                      ))}
                  </CheckboxGroup>
                  {groupSelected.length > 0 ? (
                    <p style={{marginTop: "20px", display: "flex"}}>
                      <p style={{fontWeight: "600", marginRight: "10px"}}>Seçilenler:</p> {groupSelected.join(", ")}
                    </p>
                  ) : ""
                  }
                </div>
              </div>

              <div style={{marginTop: "30px", marginBottom: "30px"}}>
                <h1 className={styles.profileTitles}>Evlere Servis</h1>
                <hr></hr>

                <div className={styles.inputContainerFor2}>
                  {Object.entries(restaurantInfo.delivery).map(([item, val], index) =>
                    (
                      <div style={{width: "45%"}}>
                        <Input placeholder={val.label} label={val.label}
                               labelPlacement={"outside"} size={`lg`}
                               value={val.value}></Input>
                      </div>
                    )
                  )
                  }
                </div>
              </div>

              <div className={styles.formButtons}>
                {saveButtonLoading ?
                  (
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                      <Button isDisabled="true" className={styles.inputCloseButton}>Kapat</Button>
                      <LoadingButton className={styles.inputSaveButton}>Kaydet</LoadingButton>
                    </div>
                  ) : (
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                      <Button className={styles.inputCloseButton}>Kapat</Button>
                      <Button onClick={saveProfile} className={styles.inputSaveButton}>Kaydet</Button>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.alignSpinner}>
          <Spinner color="secondary" size="lg"/>
        </div>
      )}

    </div>
  );

}
