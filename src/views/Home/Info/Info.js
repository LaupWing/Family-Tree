import React from 'react';
import styles from './Info.module.css';

const Info = ({editShape}) => {
   return (
      <div className={`${styles.info} ${editShape ? styles.show : '' }`}>
         <h3>{editShape ? editShape.constructor.name : 'Shape'}</h3>
         <div className={styles.field}>
            <label>x:</label>
            <input 
               type="number" 
               value={editShape ? editShape.x : 0}
            />
         </div>
         <div className={styles.field}>
            <label>y:</label>
            <input 
               type="number" 
               value={editShape ? editShape.y : 0}
            />
         </div>
         <div className={styles.field}>
            <label>size:</label>
            <input 
               type="number" 
               value={editShape ? editShape.size : 0}
            />
         </div>
         <div className={styles.field}>
            <label>width:</label>
            <input 
               type="number" 
               value={editShape ? editShape.width : 0}
            />
         </div>
         <div className={styles.field}>
            <label>color:</label>
            <input 
               type="color" 
               value={editShape ? editShape.color : 'FFFFFF'}
            />
         </div>
      </div>
   );
}

export default Info;
