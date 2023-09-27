import React from 'react';
import styles from './style.module.css';
import RestaurantLayout from '/app/(restaurant)/layout';

export default function Profile({ params }) {
  return (
    <RestaurantLayout>
      <div className={'container fluid'}>
        My Profile Page - My Profile Page - My Profile Page - My Profile Page
      </div>
    </RestaurantLayout>
  );
}
