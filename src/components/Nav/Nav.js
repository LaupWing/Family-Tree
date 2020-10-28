import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './Nav.module.css';

const Nav = () => {
   const navItems = [
      {
         name: 'Home',
         icon: 'Tree',
         path: '/tree'
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
      </nav>
   );
}

export default Nav;
