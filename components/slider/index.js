'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-elastic-carousel';
import { items } from '../../public/items.json';
import styles from './style.module.css';
// import { useMediaQuery } from 'react-responsive';

export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div className={styles.test}>
      <Carousel
        itemsToShow={9}
        showArrows={false}
        pagination={false}
        outerSpacing={10}
        itemPadding={[10, 10]}
      >
        {elastic.map((item) => (
          <button>{item.title} </button>
        ))}
      </Carousel>
    </div>
  );
}
