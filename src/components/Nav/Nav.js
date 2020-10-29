import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './Nav.module.css';
import firebase from 'firebase';
import Logout from '../Icons/Logout/Logout';
import {useHistory} from 'react-router-dom';

const Nav = () => {
   const history = useHistory();
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
            <Logout handleClick={()=>{
               firebase.auth().signOut();
               history.push('/auth');
            }}/>
         </li>
      </nav>
   );
}

export default Nav;
