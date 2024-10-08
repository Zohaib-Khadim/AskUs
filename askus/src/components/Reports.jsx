import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile as farFile, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // Regular icons for empty states
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // WhatsApp icon from brands
import { faShare } from '@fortawesome/free-solid-svg-icons'; // Solid share icon

const Reports = () => {
  return (
    <>
      <div className='mt-5 border rounded-lg flex flex-wrap justify-center gap-5 lg:gap-10 py-3 px-2 bg-white'>
        <div className='rounded-full w-8 sm:w-10 text-center pt-1 border bg-[#063d64]'>
          <FontAwesomeIcon icon={farHeart} /> {/* Empty heart icon */}
        </div>
        <button className="w-full sm:w-auto">
          <h2 className='border rounded px-3 py-1 text-white bg-[#063d64] w-full sm:w-auto'>
            <span><FontAwesomeIcon icon={farFile} /></span> Show Reports {/* Empty file icon */}
          </h2>
        </button>
        <button className="w-full sm:w-auto">
          <h2 className='border rounded px-3 py-1 text-white bg-[#063d64] w-full sm:w-auto'>
            <span><FontAwesomeIcon icon={faWhatsapp} /></span> WhatsApp
          </h2>
        </button>
        <div className='rounded-full w-8 sm:w-10 text-center pt-1 border bg-[#063d64]'>
          <FontAwesomeIcon icon={faShare} /> {/* Solid share icon */}
        </div>
      </div>
    </>
  );
};

export default Reports;
