import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import foodExample1 from '../image/french-fries.jpeg';
import vegetarianIcon from '../image/vegan-icon.png';
import vegetarianIconBlack from '../image/vegan.png';
import glutenFreeIconBlack from '../image/gluten-free-black.png';
import glutenFreeIcon from '../image/gluten-free.png';
import vegan from '../image/vegan.png';
import fastWaiter from '../image/fast-waiter.png';
import { Textarea } from '@nextui-org/react';

export default function MenuItem() {
  const openItemDetailModal = () => {
    setIsItemDetailModalOpen(true);
    document.body.style.overflowY = 'hidden';
  };

  const closeItemDetailModal = () => {
    setIsItemDetailModalOpen(false);
    document.body.style.overflowY = 'scroll';
  };
  const closeBasketAddModal = () => {
    setIsBasketAddModalOpen(false);
    document.body.style.overflowY = 'scroll';
  };

  const [isItemAdded, setIsItemAdded] = React.useState(1);
  const [isItemDetailModalOpen, setIsItemDetailModalOpen] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // TODO: fetch data from api and set it to data variable
  const addBasket = () => {
    console.log('addBasket', isLoading);
    setIsLoading(true);
    console.log('addBasket2', isLoading);
  };

  const increaseCount = (e) => {
    setIsItemAdded(isItemAdded + 1);
    e.target.nextElementSibling.innerText = isItemAdded + 1;
  };
  const decreaseCount = (e) => {
    setIsItemAdded(isItemAdded - 1);
    e.target.previousElementSibling.innerText = isItemAdded - 1;

    if (isItemAdded === 1) {
      setIsItemAdded(1);
      e.target.previousElementSibling.innerText = 1;
    }
  };

  const [isBasketAddModalOpen, setIsBasketAddModalOpen] = React.useState(false);
  const data = [
    {
      id: 1,
      name: 'Patates Kızartması',
      icon1: vegetarianIcon,
      icon2: glutenFreeIconBlack,
      icon3: vegetarianIconBlack,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc aliquet ultrices.',
      price: 20,
      image: foodExample1,
    },
    {
      id: 2,
      icon1: vegan,
      icon3: vegetarianIconBlack,
      icon2: glutenFreeIcon,
      name: 'Patates Kızartması',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc aliquet ultrices.',
      price: 20,
      image: foodExample1,
    },
  ];

  return (
    <div>
      <div
        onClick={closeBasketAddModal}
        className={`${isBasketAddModalOpen ? styles.overlay : styles.inActive}`}
      ></div>

      {/*<-----------------BASKET ADD MODAL----------------->*/}
      <div
        className={` ${styles.basketAddModalContainer} ${
          isBasketAddModalOpen ? styles.active : styles.inActive
        } `}
      >
        <span>Sepete Ekle</span>
        <div className={styles.basketAddModalContent}>
          <Textarea
            // label="Sipariş Notu"
            labelPlacement="outside"
            placeholder="Sipariş notunuzu buraya yazabilirsiniz."
            className="max-w-xs"
            rows={3}
            // cols={100}
            // cols="160"
          />
          <div className={styles.basketItemCount}>
            <div
              onClick={increaseCount}
              className={styles.basketItemQuantityButton}
            >
              +
            </div>
            {/*<div className={styles.basketItemQuantityNumber}>{isItemAdded}</div>*/}
            <div className={styles.basketItemQuantityNumber}>1</div>
            <div
              onClick={decreaseCount}
              className={styles.basketItemQuantityButton}
            >
              -
            </div>
          </div>

          <button className={`${styles.addBasketButton}`}>Sepete Ekle</button>
        </div>

        {/*Close Modal Button*/}
        <button
          onClick={closeBasketAddModal}
          className={styles.modalCloseButton}
        >
          X
        </button>
      </div>
      {/*<-----------------BASKET ADD MODAL----------------->*/}

      {/*<-----------------ITEM DETAIL MODAL----------------->*/}
      <div
        className={` ${styles.itemDetailModal} ${
          isItemDetailModalOpen ? styles.active : styles.inActive
        } `}
      >
        <div className={styles.itemDetailModalContent}>
          <div className={styles.accordionContentImage}>
            <Image
              onClick={() => setIsItemDetailModalOpen(true)}
              alt={'food-example'}
              src={foodExample1}
              width={250}
              height={250}
            />
          </div>
          <div className={styles.accordionContentItemInfo}>
            <div
              onClick={() => setIsItemDetailModalOpen(true)}
              className={styles.accordionContentItemTitle}
            >
              <h3 style={{ textAlign: 'center' }}>Patates Kızartması</h3>
            </div>
            <div className={styles.accordionContentItemDescription}>
              <p>
                İçindekiler: Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
            <div className={styles.accordionContentItemPrice}>
              <h3 style={{ textAlign: 'center' }}>50 TL</h3>
            </div>

            <div
              onClick={() => setIsBasketAddModalOpen(true)}
              className={styles.accordionContentBasket}
            >
              {/*{isLoading ? (*/}
              {/*TODO: required loading button component*/}
              {/*) : (*/}
              <button onClick={addBasket} className={styles.addBasketButton}>
                SEPETE EKLE
              </button>
              {/*)}*/}
            </div>
          </div>
        </div>

        {/*Close Modal Button*/}
        <button
          onClick={closeItemDetailModal}
          className={styles.modalCloseButton}
        >
          X
        </button>
      </div>

      <div
        onClick={closeItemDetailModal}
        className={`${
          isItemDetailModalOpen ? styles.overlay : styles.inActive
        }`}
      ></div>

      {/*<-----------------ITEM DETAIL MODAL----------------->*/}

      <div>
        {data.map((item) => (
          <div className={styles.accordionContentItem}>
            <div className={styles.accordionContentImage}>
              <Image
                onClick={openItemDetailModal}
                alt={'food-example'}
                src={item.image}
                width={150}
                height={150}
              />
            </div>
            <div className={styles.accordionContentItemInfo}>
              <div
                onClick={openItemDetailModal}
                className={styles.accordionContentItemTitle}
              >
                <h3>{item.name}</h3>
                <Image
                  src={item.icon1}
                  alt={'vegetarian-icon'}
                  width={20}
                  height={20}
                />
                <Image
                  src={item.icon2}
                  alt={'vegetarian-icon'}
                  width={20}
                  height={20}
                />
                <Image
                  src={item.icon3}
                  alt={'vegetarian-icon'}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.accordionContentItemDescription}>
                <p>{item.description}</p>
              </div>
              <div className={styles.accordionContentItemPrice}>
                <h3>{item.price} TL</h3>
              </div>

              <div
                onClick={() => setIsBasketAddModalOpen(true)}
                className={styles.accordionContentBasket}
              >
                <button onClick={addBasket} className={styles.addBasketButton}>
                  SEPETE EKLE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
