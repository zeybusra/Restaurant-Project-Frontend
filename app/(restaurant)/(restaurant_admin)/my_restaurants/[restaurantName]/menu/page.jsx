'use client';
import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import {AiOutlineEdit} from "react-icons/ai";
import {AiOutlineDelete} from "react-icons/ai";
import {MdDragIndicator} from "react-icons/md";
import {Button, Input} from "@nextui-org/react";
import foodImage from '/components/image/french-fries.jpeg';

export default function MenuManage({params}) {
  const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);

  const handleEditModal = (e) => {
    setEditModalIsOpen(!editModalIsOpen);
    if (editModalIsOpen) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }

  const addCategoryInput = () => {
    console.log('addCategoryInput');
  }

  const categories = [
    {
      name: 'Sıcak Başlangıçlar',
    },
    {
      name: 'Soğuk Başlangıçlar',
    },
    {
      name: 'Salatalar',
    },
    {
      name: 'İçecekler',
    },
    {
      name: 'Tatlılar',
    },
    {
      name: 'Ana Yemekler',
    }
  ];

  const foodItems = [
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
  ];


  return (
    <div className={styles.menuGridContainer}>
      <div className={styles.menuHeader}>
        <span>Menünüzü düzenlemeye hazır mısınız? Önce Ana kategorileri ekleyerek başlayabilirsiniz! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quod.</span>
      </div>

      {/*-------------CATEGORIES-------------*/}
      <div className={styles.menuCategories}>
        <Button onClick={addCategoryInput} className={styles.addCategoryButton}>Yeni Kategori Ekle</Button>
        {categories.map((category, index) => (
          <Button key={index} onClick={addCategoryInput} className={styles.categoryButton}>
            <div className={styles.alignItems}>
              <MdDragIndicator className={styles.dragAndDropIcon}/>
              <span>{category.name}</span>
            </div>
            <div className={styles.alignItems}>
              <AiOutlineEdit onClick={handleEditModal} className={styles.editIcon}/>
              <AiOutlineDelete className={styles.deleteIcon}/>
            </div>
          </Button>
        ))}
      </div>
      {/*-------------CATEGORIES-------------*/}


      {/*-------------FOOD ITEMS-------------*/}

      <div className={styles.foodItems}>
        <div className={styles.foodItem}>
          <Button onClick={addCategoryInput} className={styles.addCategoryButton}>Ürün Ekle</Button>
          {foodItems.map((foodItem, index) => (
            <Button key={index} onClick={addCategoryInput} className={styles.foodItemsButton}>
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
                <AiOutlineEdit className={styles.editIcon}/>
                <AiOutlineDelete className={styles.deleteIcon}/>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/*-------------FOOD ITEMS-------------*/}


      {/*------------CATEGORY EDIT MODAL------------*/}
      {
        editModalIsOpen ? (
          <div className={styles.editModalContainer}>
            <Input className={styles.categoryInput} placeholder={"Kategori İsmini Giriniz"} label="Kategori İsmi"
                   labelPlacement={"outside"}></Input>
            <Input className={styles.categoryInput} placeholder={"Kategori Açıklamasını Giriniz"}
                   label="Kategori Açıklaması" labelPlacement={"outside"}></Input>


            <div className={styles.editModalButtons}>
              <Button onClick={handleEditModal} className={styles.modalCloseButton}>Kapat</Button>
              <Button onClick={handleEditModal} className={styles.modalSaveButton}>Kaydet</Button>
            </div>

            {/*Close Modal Button*/}
            <button onClick={handleEditModal} className={styles.modalCloseIcon}>
              X
            </button>

          </div>
        ) : null
      }

      {/*------------CATEGORY EDIT MODAL------------*/}


      <div onClick={handleEditModal}
           className={`${styles.overlay} ${editModalIsOpen ? styles.overlay : styles.inactive}`}></div>

    </div>
  );
}
