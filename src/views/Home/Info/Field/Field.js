import React from 'react';
import styles from './Field.module.css'

const Field = ({
      editShape, 
      label, 
      default_val, 
      type='number', 
      setShapes, 
      shapes
   }) => {
   const updateEdit = (e)=>{
      console.log(editShape);
      console.log(label);
      console.log(e.target.value);
   }

   return (
      <div className={styles.field}>
         <label>{label}</label>
         <input 
            type={type} 
            value={editShape ? editShape[label] : default_val}
            onChange={updateEdit}
         />
      </div>
   );
}

export default Field;