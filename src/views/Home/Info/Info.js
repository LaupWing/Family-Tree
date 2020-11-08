import React from 'react';
import styles from './Info.module.css';

const Info = () => {
   return (
      <div className={styles.info}>
         <h3>Shape</h3>
         <div className={styles.field}>
            <label>x:</label>
            <input type="number"/>
         </div>
         <div className={styles.field}>
            <label>y:</label>
            <input type="number"/>
         </div>
         <div className={styles.field}>
            <label>size:</label>
            <input type="number"/>
         </div>
      </div>
   );
}

export default Info;
