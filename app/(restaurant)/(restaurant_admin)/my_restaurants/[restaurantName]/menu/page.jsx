'use client';
import React, {useEffect} from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import {AiOutlineEdit} from "react-icons/ai";
import {AiOutlineDelete} from "react-icons/ai";
import {MdDragIndicator} from "react-icons/md";
import {BsExclamationCircle} from "react-icons/bs";
import {Button, Input, Spinner} from "@nextui-org/react";
import foodImage from '/components/image/french-fries.jpeg';
import {RadioGroup, Radio} from "@nextui-org/react";
import {RxInfoCircled} from "react-icons/rx";
import LoadingButton from "/components/loading-button";

export default function MenuManage({params}) {
  const [editCategoriesModalIsOpen, setCategoriesEditModalIsOpen] = React.useState(false);
  const [editFoodItemsModalIsOpen, setEditFoodItemsModalIsOpen] = React.useState(false);
  const [deleteCategoryModalIsOpen, setDeleteCategoryModalIsOpen] = React.useState(false);
  const [deleteFoodItemModalIsOpen, setDeleteFoodItemModalIsOpen] = React.useState(false);
  const [isCategorySelected, setIsCategorySelected] = React.useState(false);
  const [saveButtonLoading, setSaveButtonLoading] = React.useState(false);
  const [menuInfo, setMenuInfo] = React.useState(false);
  const [foodItemsInfo, setFoodItemsInfo] = React.useState(false);


  const saveProfile = () => {
    setSaveButtonLoading(true);
  }

  useEffect(() => {
    fetch('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuInfo({
          name: ['Sıcak Başlangıçlar', 'Soğuk Başlangıçlar', 'Salatalar', 'İçecekler', 'Tatlılar', 'Ana Yemekler'],
        })

        setFoodItemsInfo([
          {
            name: 'Köfte',
            image: foodImage,
            price: '25',
            description: 'lorem ipsum dolor sit amet, consectetur'
          },
          {
            name: 'Patates Kızarması',
            image: foodImage,
            price: '15',
            description: 'lorem ipsum dolor sit amet, consectetur'
          },
          {
            name: 'Bademli Bulgur Pilavı',
            image: foodImage,
            price: '10',
            description: 'lorem ipsum dolor sit amet, consectetur'
          },
          {
            name: 'Çorba',
            image: foodImage,
            price: '10',
            description: 'lorem ipsum dolor sit amet, consectetur'
          },
          {
            name: 'Supangle',
            image: foodImage,
            price: '10',
            description: 'lorem ipsum dolor sit amet, consectetur'
          }
        ]);


      });
  }, []);

  const selectCategory = (e) => {
    setIsCategorySelected(!isCategorySelected);
    const divElement = e.target.closest('div').parentNode;

    if (e.target?.closest('div')?.parentNode.className.includes('categoryButton') && isCategorySelected === true) {
      console.log(11122);
      divElement.style.color = '#ffffff';
      divElement.style.backgroundColor = '#202854';
    } else if (e.target?.closest('div')?.parentNode.className.includes('categoryButton') && isCategorySelected === false) {
      console.log(3333);
      divElement.style.color = '#050505';
      divElement.style.backgroundColor = '#ffffff';
    }
  }

  const deleteCategoryModal = (e) => {
    setDeleteCategoryModalIsOpen(!deleteCategoryModalIsOpen);
    if (deleteCategoryModalIsOpen) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }

  const deleteFoodItemModal = (e) => {
    setDeleteFoodItemModalIsOpen(!deleteFoodItemModalIsOpen);
    if (deleteFoodItemModalIsOpen) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }

  const editCategoriesModal = (e) => {

    setCategoriesEditModalIsOpen(!editCategoriesModalIsOpen);
    console.log(11)
    console.log('saveButtonLoading', saveButtonLoading)
    if (editCategoriesModalIsOpen) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }

  const editFoodItemsModal = (e) => {
    console.log(46543)
    setEditFoodItemsModalIsOpen(!editFoodItemsModalIsOpen);
    if (editFoodItemsModalIsOpen) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }

  const addCategoryInput = () => {
    console.log('addCategoryInput');
  }


  return (
    <div className={styles.menuGridContainer}>
      <div className={styles.menuHeader}>
        <span>Menünüzü daha düzenli hale getirmek için ana kategoriler eklemek büyük bir adımdır. İşte nasıl başlayabileceğiniz:</span>
      </div>

      {menuInfo ? (
        <div style={{display: "flex"}}>

          {/*-------------CATEGORIES-------------*/}
          <div className={styles.menuCategories}>

            <div className={styles.infoAboutMenu}>
              <RxInfoCircled className={styles.infoAboutIcon}/>
              <div style={{width: "95%", display: "flex", flexDirection: "column"}}>
                <span style={{fontWeight: "600"}}>Kategorileri Tanımlayın: </span>
                <span>Ana kategorilerinizi belirleyin.Örneğin, "Başlangıçlar," "Ana Yemekler," "Tatlılar," gibi kategoriler oluşturabilirsiniz.</span>
              </div>
            </div>

            <Button onClick={editCategoriesModal} className={styles.addCategoryButton}>Yeni Kategori Ekle</Button>
            {menuInfo.name.map((categoryItem, index) => (
              <div onClick={selectCategory} key={index} className={styles.categoryButton}>
                <div className={styles.alignItems}>
                  <MdDragIndicator className={styles.dragAndDropIcon}/>
                  <span>{categoryItem}</span>
                </div>
                <div className={styles.alignItems}>
                  <AiOutlineEdit onClick={editCategoriesModal} className={styles.editIcon}/>
                  <AiOutlineDelete onClick={deleteCategoryModal} className={styles.deleteIcon}/>
                </div>
              </div>
            ))}
          </div>

          {/*-------------CATEGORIES-------------*/}


          {/*-------------FOOD ITEMS-------------*/
          }

          <div className={styles.foodItems}>
            <div className={styles.infoAboutMenu}>
              <RxInfoCircled className={styles.infoAboutIcon}/>
              <div style={{width: "95%", display: "flex", flexDirection: "column"}}>
                <span style={{fontWeight: "600"}}>Kategoriye Ait Ürünleri girin.</span>
                <span>Şimdi, her yemek veya içeceği uygun kategoriye atayın. Bunun için öncelikle sol taraftan kategoriyi seçin, sonra yeni ürün ekle butonuyla ürün ekleyebilir, çıkarabilir ve düzenleme ikonlarıyla sırasını değiştirebilirsiniz.</span>
              </div>
            </div>
            <div className={styles.foodItem}>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className={styles.selectedFoodItem}>Sıcak Başlangıçlar</div>
                <Button onClick={editFoodItemsModal} className={styles.addFoodItemsButton}>Ürün Ekle</Button>
              </div>
              {foodItemsInfo.map((foodItem, index) => (
                <div key={index} className={styles.foodItemsButton}>
                  <div style={{display: "flex", flexDirection: "row", textAlign: "start", alignItems: "center"}}>
                    <MdDragIndicator className={styles.dragAndDropIcon}/>
                    <Image style={{borderRadius: "5px"}} src={foodItem.image} width={80} height={80}/>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", textAlign: "start"}}>
                    <span>{foodItem.name}</span>
                    <span>{foodItem.description}</span>
                  </div>
                  <span>{foodItem.price} TL</span>
                  <div className={styles.alignItems}>
                    <AiOutlineEdit onClick={editFoodItemsModal} className={styles.editIcon}/>
                    <AiOutlineDelete onClick={deleteFoodItemModal} className={styles.deleteIcon}/>
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>
        ) : (


        <div className={styles.alignSpinner}>
          <Spinner color="secondary" size="lg"/>
        </div>
      )}

      {/*-------------FOOD ITEMS-------------*/}


      {/*------------CATEGORY EDIT MODAL------------*/}

      {editCategoriesModalIsOpen ? (
        <div className={styles.editModalContainer}>
          <Input className={styles.categoryInput} placeholder={"Kategori İsmini Giriniz"} label="Kategori İsmi"
                 labelPlacement={"outside"}></Input>
          <Input className={styles.categoryInput} placeholder={"Kategori Açıklamasını Giriniz"}
                 label="Kategori Açıklaması" labelPlacement={"outside"}></Input>


          <div className={styles.editModalButtons}>

            {saveButtonLoading ?
              (
                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                  <Button isDisabled="true" className={styles.modalCloseButton}>Kapat</Button>
                  <LoadingButton  className={styles.modalSaveButton}>Kaydet</LoadingButton>
                </div>
              ) : (
                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                  <Button className={styles.modalCloseButton}>Kapat</Button>
                  <Button className={styles.modalSaveButton}>Kaydet</Button>
                </div>
              )
            }
          </div>

          {/*Close Modal Button*/}
          <button onClick={editCategoriesModal} className={styles.modalCloseIcon}>
            X
          </button>

        </div>
      ) : null
      }
      {/*------------CATEGORY EDIT MODAL------------*/
      }

      {/*------------FODD ITEM MODAL------------*/
      }
      {
        editFoodItemsModalIsOpen ? (
          <div className={styles.editFoodItemsModalContainer}>
            <h1>Ürün Bilgileri</h1>

            <span className={styles.cautionForCustomers}>
        <BsExclamationCircle className={styles.cautionIcon}/>

        Lütfen menü bilgilerini eksiksiz ve doğru bir şekilde giriniz. Müşterilerinizin menüyü anlaması ve sipariş vermeleri için tüm bilgilerin doğru ve tam olması çok önemlidir.</span>
            <Input className={styles.foodItemInput} placeholder={"Ürün İsmini Giriniz"} label="Ürün İsmi"
                   labelPlacement={"outside"}></Input>
            <Input className={styles.foodItemInput} placeholder={"Ürün Açıklamasını Giriniz"}
                   label="Ürün Açıklaması" labelPlacement={"outside"}></Input>

            <Input
              className={styles.foodItemInput}
              label="Fiyat"
              placeholder="0.00"
              labelPlacement="outside"
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="currency">
                    Currency
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                  >
                    <option>TL</option>
                    <option>TRY</option>
                    <option>$</option>
                    <option>₺</option>
                  </select>
                </div>
              }
              type="number"
            />

            <Input
              className={styles.foodItemInput}
              label="Boyut"
              placeholder="Ürün Boyut Bilgisini Giriniz"
              labelPlacement="outside"
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="size">
                    Currency
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                  >
                    <option>Gram</option>
                    <option>Litre</option>
                    <option>CC</option>
                  </select>
                </div>
              }
              type="number"
            />

            <Input className={styles.foodItemInput} placeholder={"Ürün İçeriğini Giriniz"}
                   label="Ürün İçeriği" labelPlacement={"outside"}></Input>

            <Input className={styles.foodItemInput} placeholder={"Ürün Kalori Bilgisini Giriniz"} label="Kalori"
                   labelPlacement={"outside"}></Input>

            <Input className={styles.foodItemInput} placeholder={"Hazırlanma Süresini Giriniz"}
                   label="Hazırlanma Süresi"
                   labelPlacement={"outside"}></Input>

            <RadioGroup
              className={styles.foodItemRadioGroup}
              color="primary"
              defaultValue="Aktif"
              size={"sm"}
              label="Durum"
            >
              <Radio value="active">Aktif</Radio>
              <Radio value="passive">Pasif</Radio>
              <Radio value="no-stock">Stokta Kalmadı</Radio>
            </RadioGroup>

            <Input className={styles.foodItemInput} style={{cursor: "pointer"}} type={"file"}></Input>


            <div className={styles.editModalButtons}>
              <Button onClick={editFoodItemsModal} className={styles.modalCloseButton}>Kapat</Button>
              <Button onClick={editFoodItemsModal} className={styles.modalSaveButton}>Kaydet</Button>
            </div>

            {/*Close Modal Button*/}
            <button onClick={editFoodItemsModal} className={styles.modalCloseIcon}>
              X
            </button>

          </div>
        ) : null
      }
      {/*------------FODD ITEM MODAL------------*/
      }


      {/*------------FODD ITEM CLEAR MODAL------------*/
      }
      {
        deleteFoodItemModalIsOpen ? (
          <div className={styles.deleteFoodItemsModalContainer}>
            <span>Ürünü silmek üzeresiniz. Onaylıyor musunuz?</span>
            <div className={styles.clearFoodItemsButtons}>
              <Button onClick={deleteFoodItemModal} className={styles.modalCloseButton}>Kapat</Button>
              <Button onClick={deleteFoodItemModal} className={styles.modalSaveButton}>Onayla</Button>
            </div>
            {/*Close Modal Button*/}
            <button onClick={deleteFoodItemModal} className={styles.modalCloseIcon}>
              X
            </button>
          </div>
        ) : null
      }

      {/*------------FODD ITEM CLEAR MODAL------------*/
      }


      {/*------------CATEGORIES CLEAR MODAL------------*/
      }
      {
        deleteCategoryModalIsOpen ? (
          <div className={styles.deleteFoodItemsModalContainer}>
            <span>Kategoriyi silmek üzeresiniz. Onaylıyor musunuz?</span>
            <div className={styles.clearCategoriesButtons}>
              <Button onClick={deleteCategoryModal} className={styles.modalCloseButton}>Kapat</Button>
              <Button onClick={deleteCategoryModal} className={styles.modalSaveButton}>Onayla</Button>
            </div>
            {/*Close Modal Button*/}
            <button onClick={deleteCategoryModal} className={styles.modalCloseIcon}>
              X
            </button>
          </div>
        ) : null
      }

      {/*------------CATEGORIES CLEAR MODAL------------*/
      }


      <div onClick={editFoodItemsModal}
           className={`${styles.overlay} ${editFoodItemsModalIsOpen ? styles.overlay : styles.inactive}`}></div>

      <div onClick={editCategoriesModal}
           className={`${styles.overlay} ${editCategoriesModalIsOpen ? styles.overlay : styles.inactive}`}></div>

      <div onClick={deleteFoodItemModal}
           className={`${styles.overlay} ${deleteFoodItemModalIsOpen ? styles.overlay : styles.inactive}`}></div>

      <div onClick={deleteCategoryModal}
           className={`${styles.overlay} ${deleteCategoryModalIsOpen ? styles.overlay : styles.inactive}`}></div>



    </div>
  );
}
