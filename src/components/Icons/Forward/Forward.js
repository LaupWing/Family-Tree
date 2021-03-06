import React from 'react'

const Forward = ({reverse, extraClassname, handleClick}) => {
   return (
      <svg 
         onClick={handleClick} 
         className={extraClassname ? extraClassname : ''} 
         style={{
            'transform': reverse && 'rotateY(180deg)'
         }} 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 149 126"
      >
         <path d="M131.23,60.39,119.46,72.16c-10.41,10.4-21.14,21.12-31.73,31.76V74.82l-6.77-1a44.72,44.72,0,0,0-6.84-.52,58.53,58.53,0,0,0-15,2.12C42.52,79.72,28.73,89.65,17,105.76L16,107v-1.68c.33-1.77.63-3.53.92-5.24q.9-5.94,2.39-11.76c7-25.27,30.05-44.61,56.19-47,1.22-.11,2.36-.27,3.57-.44l1.69-.23,7-.91V16.92Q109.51,38.64,131.23,60.39Z"/>
      </svg>
   );
}

export default Forward;
