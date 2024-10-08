import React from 'react';
import Audi from '../../public/Audi.png'; 

const Main = () => {
  return (
    <>
      <div className="h-80 border rounded-lg bg-white">
        <img src={Audi} alt="Audi" className="w-full h-full object-cover" /> 
      </div>
    </>
  );
};

export default Main;
