import React from 'react';
import icons from '../../Icons';
import styles from './NavItem.module.css';

const NavItem = ({item}) => {
   const Icon = icons[item.icon];
   return (
      <li className={styles.navItem}>
         <Icon/>
      </li>
   );
}

export default NavItem;