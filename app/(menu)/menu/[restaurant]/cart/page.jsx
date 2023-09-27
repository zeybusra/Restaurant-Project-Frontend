'use client';
import React from 'react';
import styles from './style.module.css';
import basketFoodItem1 from '../../../../../components/image/french-fries.jpeg';
import basketFoodItem2 from '../../../../../components/image/fried-sausages.jpeg';
import basketFoodItem3 from '../../../../../components/image/onion-rings.jpeg';
import preparingCook from '../../../../../components/image/cooking-colorfull.png';
import beforeOrder from '../../../../../components/image/approval-order.png';
import Image from 'next/image';
import { IoTrashOutline } from 'react-icons/io5';
import { Textarea } from '@nextui-org/react';

export default function Cart({ params }) {
  const [isOrderApprovalModalOpen, setIsOrderApprovalModalOpen] =
    React.useState(false);

  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isItemAdded, setIsItemAdded] = React.useState(1);
  const [clearThisItem, setClearThisItem] = React.useState(false);

  const clearItems = (e) => {
    if (e.target.tagName === 'svg') {
      e.target.parentElement.style.display = 'none';
    } else {
      e.target.parentElement.parentElement.style.display = 'none';
    }
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

  const defaultContent = (
    <div
      className={`${styles.basketItemContent} ${
        clearThisItem ? styles.inActive : styles.active
      }`}
    >
      <Image src={basketFoodItem1} width={100} height={100} />
      <div className={styles.basketItemText}>
        <h3>Patates Kızartması</h3>
        <span>Patates kızartması yerine salata almak istiyorum.</span>
        <h3>20 TL</h3>
      </div>
      <div className={styles.basketItemQuantity}>
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
      <IoTrashOutline
        onClick={clearItems}
        className={styles.basketClearAllButton}
      />
    </div>
  );

  const allOrderDefaultContent = (
    <div className={styles.basketAllOrdersItem}>
      <Image src={basketFoodItem1} width={100} height={100} />
      <div className={styles.basketAllOrdersItemText}>
        <h3>Patates Kızartması</h3>
        <span>Patates kızartması yerine salata almak istiyorum.</span>
        <h3>20 TL</h3>
      </div>
    </div>
  );

  return (
    <div className={'container fluid'}>
      {/*<-----------BASKET ITEMS START--------------->*/}

      <div className={styles.basketContainer}>SEPETİM</div>
      <div className={styles.basketContent}>
        {defaultContent}
        {defaultContent}
        {defaultContent}

        {/*<-----------BASKET ITEMS END--------------->*/}

        {/*<-----------ORDER APPROVAL MODAL START--------------->*/}
        <div
          onClick={() => setIsOrderApprovalModalOpen(false)}
          className={`${
            isOrderApprovalModalOpen ? styles.overlay : styles.inActive
          }`}
        ></div>
        <div
          className={` ${styles.orderApprovalModalContainer} ${
            isOrderApprovalModalOpen ? styles.active : styles.inActive
          } `}
        >
          <div
            className={`${styles.beforeOrderApproval} ${
              isOrderCompleted ? styles.inActive : styles.active
            }`}
          >
            <Image src={beforeOrder} width={80} height={80} />
            <div style={{ marginTop: '20px' }}>
              Siparişinizi vermek üzeresiniz. Onaylıyor musunuz?
            </div>
            <div className={styles.approvalContainer}>
              <button
                onClick={() => setIsOrderApprovalModalOpen(false)}
                className={styles.rejectButton}
              >
                Sepete Dön
              </button>

              <button
                onClick={() => setIsOrderCompleted(true)}
                className={styles.approvalButton}
              >
                Onayla
              </button>
            </div>
          </div>

          <div
            className={`${styles.afterOrderApproval} ${
              isOrderCompleted ? styles.active : styles.inActive
            }`}
          >
            <Image src={preparingCook} width={100} height={100} />
            <div>Siparişinizi mutfağa ilettik.</div>
            <div>En kısa sürede masanıza getiriyoruz :)</div>
          </div>

          <button
            onClick={() => setIsOrderApprovalModalOpen(false)}
            className={styles.modalCloseButton}
          >
            X
          </button>
        </div>

        {/*<-----------ORDER APPROVAL MODAL END--------------->*/}

        {/*<-----------BASKET SUMMARY START--------------->*/}

        <div className={styles.basketSummary}>
          <div className={styles.basketOrderNotes}>
            <Textarea
              label="Sipariş Notu"
              labelPlacement="outside"
              placeholder="Sipariş notunuzu buraya yazabilirsiniz."
              className="max-w-xs"
            />
          </div>

          <div className={styles.basketTotalPrice}>
            <h3>60 TL</h3>
            <div
              onClick={() => setIsOrderApprovalModalOpen(true)}
              className={styles.basketTotalPriceButton}
            >
              Siparişi Tamamla
            </div>
          </div>
        </div>
        {/*<-----------BASKET SUMMARY END--------------->*/}

        {/*<-----------OTHER ORDERS START--------------->*/}
        <div className={styles.basketAllOrders}>
          <h1>MASA 8 'İN DİĞER SİPARİŞLERİ</h1>
          {allOrderDefaultContent}
          {allOrderDefaultContent}
          {allOrderDefaultContent}
        </div>
      </div>
      {/*<-----------OTHER ORDERS END--------------->*/}
    </div>
  );
}
