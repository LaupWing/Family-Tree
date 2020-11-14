import React from 'react';
import styles from './Field.module.css'

const Field = ({editShape, label, default_val, type='number'}) => {
   return (
      <div className={styles.field}>
         <label>{label}</label>
         <input 
            type={type} 
            value={editShape ? editShape[label] : default_val}
         />
      </div>
   );
}

export default Field;