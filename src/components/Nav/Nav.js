import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './Nav.module.css';
import Logout from '../Icons/Logout/Logout';

const Nav = () => {
   const navItems = [
      {
         name: 'Home',
         icon: 'Tree',
         path: '/'
      },
      {
         name: 'Chats',
         icon: 'Chats',
         path: '/chats'
      },
      {
         name: 'Friends',
         icon: 'Friends',
         path: '/friends'
      },
   ].map(x=>{
      return <NavItem 
         item={x}
         key={x.name}
      />
   });
   return (
      <nav className={styles.navigation}>
         {navItems}
         <li className={styles.logout}>
            <Logout/>
         </li>
      </nav>
   );
}

export default Nav;
