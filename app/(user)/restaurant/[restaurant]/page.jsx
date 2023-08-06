'use client';
import Image from 'next/image';
import restaurantImage1 from '/components/image/restaurant-image-3.jpg';
import restaurantImage2 from '/components/image/restaurant-image-4.jpg';
import styles from './styles.module.css';
import { Button } from '@nextui-org/react';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

export default function Restaurant({ params }) {
  return (
    <div className={'container fluid'}>
      <div className={styles.bannerArea}>
        <Image
          className={styles.restaurantImage}
          src={restaurantImage1}
          alt={'restaurant-image'}
          width={500}
          height={500}
        />

        <div className={styles.overlay}></div>

        <h1 className={styles.restaurantTitle}>
          Welcome to <span className={styles.importTitle}>Kirpi</span>
          <span className={styles.subTitle}>The Best Experience</span>
        </h1>

        <Button className={styles.reservationButton} variant="bordered">
          MAKE A RESERVATION
        </Button>
      </div>

      <div></div>
    </div>
  );
}
