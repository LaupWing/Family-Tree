import React from 'react';
import icons from '../../Icons';
import styles from './NavItem.module.css';
import {NavLink} from 'react-router-dom';

const NavItem = ({item}) => {
   const Icon = icons[item.icon];
   return (
      <NavLink 
         to={item.path} 
         className={styles.navItem}
         activeClassName={styles.active}
         exact
      >
         <Icon/>
      </NavLink>
   );
}

export default NavItem;