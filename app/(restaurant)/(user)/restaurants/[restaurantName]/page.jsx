'use client';
import React from 'react';
import Image from 'next/image';
import restaurantImage1 from '/components/image/restaurant-image-3.jpg';
import restaurantImage2 from '/components/image/restaurant-image-5.jpg';
import restaurantImage3 from '/components/image/restaurant-image-6.jpeg';
import restaurantImage4 from '/components/image/restaurant-image-7.jpeg';
import restaurantImage5 from '/components/image/restaurant-image-8.jpeg';
import restaurantImage6 from '/components/image/restaurant-image-9.jpeg';
import restaurantImage7 from '/components/image/restaurant-image-10.jpeg';
import restaurantImage8 from '/components/image/restaurant-image-11.jpeg';
import restaurantImage9 from '/components/image/restaurant-image-12.jpeg';
import restaurantImage10 from '/components/image/restaurant-image-13.jpeg';
import styles from './styles.module.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import Link from 'next/link';
import {
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
} from 'react-icons/pi';

export default function Restaurant({ params }) {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
  ];
  const person = [
    '1 Person',
    '2 Person',
    '3 Person',
    '4 Person',
    '5 Person',
    '6 Person',
    '7 Person',
    '8 Person',
    '9 Person',
    '10 Person',
  ];

  return (
    <div>
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
            Welcome to <span className={styles.importTitle}>Restaurant</span>
            <span className={styles.subTitle}>The Best Experience</span>
          </h1>

          <Button className={styles.reservationButton} variant="bordered">
            MAKE A RESERVATION
          </Button>
        </div>
      </div>

      <div className={styles.reservationArea}>
        <div className={styles.formArea}>
          <h2>BOOK A TABLE!</h2>
          {/*<Box className={styles.formBox}>*/}
          {/*  /!*<LocalizationProvider dateAdapter={AdapterDayjs}>*!/*/}
          {/*  /!*  <DemoContainer components={['DatePicker']}>*!/*/}
          {/*  /!*    <DatePicker label="Pick date" />*!/*/}
          {/*  /!*  </DemoContainer>*!/*/}
          {/*  /!*</LocalizationProvider>*!/*/}

          {/*  <Autocomplete*/}
          {/*    disablePortal*/}
          {/*    id="combo-box-demo"*/}
          {/*    options={top100Films}*/}
          {/*    size="small"*/}
          {/*    sx={{ width: 195 }}*/}
          {/*    renderInput={(params) => <TextField {...params} label="Date" />}*/}
          {/*  />*/}

          {/*  <Autocomplete*/}
          {/*    disablePortal*/}
          {/*    id="combo-box-demo"*/}
          {/*    options={top100Films}*/}
          {/*    size="small"*/}
          {/*    sx={{ width: 195 }}*/}
          {/*    renderInput={(params) => <TextField {...params} label="Time" />}*/}
          {/*  />*/}

          {/*  <Autocomplete*/}
          {/*    disablePortal*/}
          {/*    id="combo-box-demo"*/}
          {/*    options={person}*/}
          {/*    size="small"*/}
          {/*    sx={{ width: 195 }}*/}
          {/*    renderInput={(params) => <TextField {...params} label="Person" />}*/}
          {/*  />*/}
          {/*</Box>*/}
          {/*<Box className={styles.formBox}>*/}
          {/*  <TextField*/}
          {/*    id="demo-helper-text-misaligned-no-helper"*/}
          {/*    label="Full Name"*/}
          {/*    size="small"*/}
          {/*  />*/}
          {/*  <TextField*/}
          {/*    id="demo-helper-text-misaligned-no-helper"*/}
          {/*    size="small"*/}
          {/*    label="Mail"*/}
          {/*  />*/}
          {/*  <TextField*/}
          {/*    id="demo-helper-text-misaligned-no-helper"*/}
          {/*    size="small"*/}
          {/*    label="Phone"*/}
          {/*  />*/}
          {/*</Box>*/}

          {/*<Stack className={styles.buttonDone} direction="row" spacing={2}>*/}
          {/*  <Button color="warning" variant="contained" href="/">*/}
          {/*    MAKE A RESERVATION*/}
          {/*  </Button>*/}
          {/*</Stack>*/}
        </div>
        <div className={styles.formText}>
          <Image
            src={restaurantImage10}
            alt={'chef'}
            className={styles.chefImage}
          />
        </div>
      </div>

      <div className={`${styles.restaurantAllImage} fluid`}>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage2}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage3}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage4}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage5}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage9}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage7}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage8}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className={styles.restaurantImage}
            src={restaurantImage6}
            alt={'restaurant-image'}
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.locationInfo}>
          <h4>CONTACT US!</h4>
          <h2>ADRESS</h2>
          <p>123 Street, New York, USA</p>
          <div className={styles.contactIcon}>
            <Link href={'/'}>
              <PiFacebookLogoLight />
            </Link>
            <Link href={'/'}>
              <PiInstagramLogoLight />
            </Link>
            <Link href={'/'}>
              <PiLinkedinLogoLight />
            </Link>
          </div>
        </div>

        <div className={styles.contactText}>
          <h2>Open Hours</h2>
          <ul className={styles.openHours}>
            <li>
              <span>Monday</span>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <span>Wednesday</span>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <span>Thursday</span>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <span>Friday</span>
              <span>9:00 - 02:00</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>9:00 - 02:00</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>9:00 - 02:00</span>
            </li>
          </ul>
        </div>

        <div className={styles.mapInfo}></div>

        {/*<div className={styles.contactForm}>*/}
        {/*  <Box className={styles.formBox}>*/}
        {/*    <TextField*/}
        {/*      id="demo-helper-text-misaligned-no-helper"*/}
        {/*      label="Full Name"*/}
        {/*      size="small"*/}
        {/*    />*/}
        {/*    <TextField*/}
        {/*      id="demo-helper-text-misaligned-no-helper"*/}
        {/*      size="small"*/}
        {/*      label="Mail"*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/**/}
        {/*  <Box*/}
        {/*    className={styles.formBox}*/}
        {/*    sx={{*/}
        {/*      width: 500,*/}
        {/*      maxWidth: '100%',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <TextField size="large" fullWidth label="Message" id="fullWidth" />*/}
        {/*  </Box>*/}
        {/**/}
        {/*  <Box>*/}
        {/*    <Button className={styles.sendMessageButton} variant="bordered">*/}
        {/*      SEND MESSAGE*/}
        {/*    </Button>*/}
        {/*  </Box>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
