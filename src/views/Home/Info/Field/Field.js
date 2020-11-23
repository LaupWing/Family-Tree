import React from 'react';
import styles from './Field.module.css'

const Field = ({
      editShape, 
      label, 
      default_val, 
      type='number',
      setSnapshot,
      snapshot
   }) => {
   const updateEdit = (e)=>{
      const updateSnapshot = snapshot.find(x=>x===editShape);
      updateSnapshot[label] = e.target.value;
      // console.log(snapshot);
      // console.log(editShape);
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