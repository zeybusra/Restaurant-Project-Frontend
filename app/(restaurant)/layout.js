import React from 'react';
import styles from '/app/(restaurant)/style.module.css';
import Header from 'components/header';
import Footer from 'components/footer';
import SidebarTemplate from '../../components/sidebar';

export default function RestaurantLayout({ children }) {
  return (
    <div>
      <Header />
      <SidebarTemplate />
      <div className={'container fluid'}>{children}</div>
      <Footer />
    </div>
  );
}
