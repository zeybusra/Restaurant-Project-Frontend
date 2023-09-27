'use client';
import React, { useState, useEffect } from 'react';
import styles from '/app/(menu)/menu/[restaurant]/style.module.css';
import MenuLayout from '../../layout';
import Image from 'next/image';
import restaurantLogo from '../../../../components/image/restaurant-logo-kirpi.png';
import foodExample1 from '../../../../components/image/french-fries.jpeg';
import foodExample2 from '../../../../components/image/fried-sausages.jpeg';
import foodExample3 from '../../../../components/image/menemen.jpeg';
import { Accordion, accordionItem, AccordionItem } from '@nextui-org/react';
import MenuItem from '../../../../components/menu-item';

function Menu({ params }) {
  const [accordionSelectedIds, setAccordionSelectedIds] = React.useState(
    new Set([]),
  );

  const [menuCategories, setMenuCategories] = useState(null);

  useEffect(() => {
    fetch('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
      .then((response) => response.json())
      .then((data) => {
        setMenuCategories(data);

        console.log('data', data);
      });
  }, []);

  const accordionKey = Array.from(accordionSelectedIds).join(',');

  const toggleAccordionItem = (e) => {
    const clickedKey = e.target.dataset.key;
    if (accordionSelectedIds.has(clickedKey)) {
      accordionSelectedIds.delete(clickedKey);
    } else {
      accordionSelectedIds.add(clickedKey);
    }
    setAccordionSelectedIds(new Set(accordionSelectedIds));
  };

  return (
    <div className={'container fluid'}>
      <div className={styles.brandBanner}>
        <div>
          <Image
            className={styles.profileImage}
            src={restaurantLogo}
            width={100}
            height={100}
            alt={'profile-image'}
          />
        </div>
      </div>
      <div className={styles.allFood}>
        <div className={styles.mainMeal}>
          {menuCategories &&
            menuCategories.map((item) => {
              return (
                <button data-key={item.id} onClick={toggleAccordionItem}>
                  Sıcak Başlangıçlar
                </button>
              );
            })}
        </div>

        <div>
          <Accordion
            key={accordionKey}
            className={styles.accordionContainer}
            selectionMode="multiple"
            selectedKeys={accordionSelectedIds}
            onSelectionChange={setAccordionSelectedIds}
          >
            $
            {menuCategories?.map((item) => {
              return (
                <AccordionItem
                  className={styles.accordionItemElement}
                  key={item.id}
                  aria-label={'Accordion' + item.id}
                  title="Sıcak Başlangıçlar"
                >
                  <MenuItem />
                </AccordionItem>
              );
            })}
            ;
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Menu;
