import React from 'react';
import styles from './Info.module.css';
import Field from './Field/Field';

const Info = ({editShape, setShapes, shapes}) => {
   const fields = [
      {
         default_val: 0,
         label: 'x',
      }, 
      {
         default_val: 0,
         label: 'y'
      }, 
      {
         default_val: 0,
         label: 'size'
      }, 
      {
         default_val: 0,
         label: 'width'
      }, 
      {
         default_val: '#FFFFF',
         label: 'color',
         type: 'color'
      }, 
   ];
   return (
      <div className={`${styles.info} ${editShape ? styles.show : '' }`}>
         <h3>{editShape ? editShape.constructor.name : 'Shape'}</h3>
         {fields.map(x=>{
            return <Field
               editShape={editShape}
               label={x.label}
               key={x.label}
               type={x.type}
               default_val={x.default_val}
               setShapes={setShapes}
               shapes={shapes}
            />
         })}
      </div>
   );
}

export default Info;
