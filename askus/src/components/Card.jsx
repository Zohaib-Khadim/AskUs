import React from 'react';
import Audi from '../../public/Audi.png';

const Card = () => {
  return (
    <>
      <div className='border bg-[#063d64] flex flex-col lg:flex-row justify-center rounded-lg mt-10 gap-5 lg:gap-10 items-center w-full lg:w-[45rem] mx-auto py-5 lg:py-7 text-white'>
        <div className='border rounded-lg inline-block h-44 lg:h-60 bg-white'>
          <img src={Audi} alt="Audi" className="w-40 lg:w-72 mt-3 lg:mt-5 object-cover p-3 lg:p-5" />
        </div>
        <div className='w-full lg:w-auto'>
          <p className='font-bold text-lg text-center lg:text-left'>MERCEDES-BENZ C-CLASS-2015</p>
          <h2 className='font-bold text-lg text-center lg:text-left'>SAR 5000</h2>
          <div className='flex justify-between text-sm lg:text-base px-4 lg:px-0'>
            <p>Mileage</p>
            <p>70000km</p>
          </div>
          <div className='flex justify-between text-sm lg:text-base px-4 lg:px-0'>
            <p>Engine</p>
            <p>Electric</p>
          </div>
          <div className='flex justify-between text-sm lg:text-base px-4 lg:px-0'>
            <p>Transmission</p>
            <p>Automatic</p>
          </div>
          <h3 className='text-center my-2'>Start In:</h3>
          <div className='border text-center w-3/4 lg:w-1/2 px-2 py-1 rounded-lg mx-auto bg-white text-black'> 01 : 23 : 49 : 10</div>
        </div>
      </div>
    </>
  );
};

export default Card;
