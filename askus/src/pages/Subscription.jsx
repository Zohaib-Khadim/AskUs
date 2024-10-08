import React from 'react';

const Subscription = () => {
  return (
    <div className="border mx-5 md:mx-20 mt-10 bg-[#063d64] text-white pb-20 rounded-lg mb-20">
      <div className="grid grid-cols-3  mt-10 ">
        <h1 className="col-span-1 text-3xl md:text-5xl  ms-10">Logo</h1>
        <p className="col-span-2   text-2xl md:text-3xl font-semibold ms-10 ">
          Stay Updated! Subscribe to <br /> <span className='ps-10'>Our Newsletter</span>
        </p>
      </div>
      <div className="border w-3/4 md:w-1/2 mx-auto rounded-lg bg-white ps-2 mt-10 flex items-center">
        <input
          type="text"
          className="w-full md:w-[26.8rem] py-2 px-4 rounded-l-lg"
          placeholder="Your Email Here"
        />
        <button className="text-xl bg-blue-500 rounded-r-lg px-4 py-3 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
