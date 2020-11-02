import React from 'react';
import styles from './EditShape.module.css';

const EditShape = ({offset, editing}) => {
   return (
      <div 
         className={styles.shape}
         style={{
            'left': `${(editing.x)-offset}px`,
            'top': `${editing.y-offset}px`,
            'width': `${editing.dimension+(offset*2)}px`,
            'height': `${editing.dimension+(offset*2)}px`
         }}
      >
         
      </div>
   );
}

export default EditShape;