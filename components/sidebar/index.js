'use client';
import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { IoIosPerson, IoMdPerson } from 'react-icons/io';
import { RxPerson } from 'react-icons/rx';
import { MdOutlineSystemSecurityUpdateGood } from 'react-icons/md';
import { IoHelpSharp } from 'react-icons/io5';
import { BiHelpCircle } from 'react-icons/bi';
import { LuHelpingHand } from 'react-icons/lu';
import styles from './style.module.css';

const drawerWidth = 240;

function SidebarTemplate({ children }) {
  return (
    <div></div>
    // <Box sx={{ display: 'flex' }}>
    //   <CssBaseline />
    //   <AppBar
    //     position="fixed"
    //     sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    //   ></AppBar>
    //   <Drawer
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: drawerWidth,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //     variant="permanent"
    //     anchor="left"
    //   >
    //     <Toolbar />
    //     {/*<Divider />*/}
    //     <List>
    //       {[
    //         'Hesabım',
    //         'Restaurantlarım',
    //         'Analizlerim',
    //         'Profili Düzenle',
    //         'Sıkça Sorulan Sorular',
    //         'Yardım',
    //       ].map((text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemText primary={text} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Drawer>
    //   <Box
    //     component="main"
    //     sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    //   >
    //     <Toolbar />
    //     {/*<Typography paragraph>test</Typography>*/}
    //     {/*<Typography paragraph>test</Typography>*/}
    //   </Box>
    // </Box>
  );
}

export default SidebarTemplate;
