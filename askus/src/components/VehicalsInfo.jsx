import React from 'react'

const VehicalsInfo = () => {
  return (
    <>
      <div className='border rounded-lg pb-5 bg-white'>
        <h2 className='bg-[#063d64] text-white font-bold text-xl md:text-2xl w-11/12 md:w-3/5 text-center mx-auto mt-5 rounded-lg px-2 py-3'>
          VEHICLE INFORMATION
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 md:px-16  mt-7'>
          {/* First Column */}
          <div className='leading-7 md:leading-9'>
            <div>
              <p>Document Type</p>
              <h2 className='text-[#063d64] font-bold'>VCC</h2>
            </div>
            <div>
              <p>Primary Damage</p>
              <h2 className='text-[#063d64] font-bold'>Minor Dent/Scratches</h2>
            </div>
            <div>
              <p>Cylinders</p>
              <h2 className='text-[#063d64] font-bold'>8</h2>
            </div>
            <div>
              <p>Specification</p>
              <h2 className='text-[#063d64] font-bold'>American</h2>
            </div>
            <div>
              <p>Keys</p>
              <h2 className='text-[#063d64] font-bold'>Yes</h2>
            </div>
            <div>
              <p>Exterior Color</p>
              <h2 className='text-[#063d64] font-bold'>White</h2>
            </div>
            <div>
              <p>Drive Type</p>
              <h2 className='text-[#063d64] font-bold'>AWD</h2>
            </div>
            <div>
              <p>Highlights 1</p>
              <h2 className='text-[#063d64] font-bold'>Run & Drive</h2>
            </div>
          </div>
          {/* Second Column */}
          <div className='leading-7 md:leading-9'>
            <div>
              <p>Odometer</p>
              <h2 className='text-[#063d64] font-bold'>45674 Miles</h2>
            </div>
            <div>
              <p>Secondary Damage</p>
              <h2 className='text-[#063d64] font-bold'>None</h2>
            </div>
            <div>
              <p>Engine Type</p>
              <h2 className='text-[#063d64] font-bold'>5.7L</h2>
            </div>
            <div>
              <p>Transmission</p>
              <h2 className='text-[#063d64] font-bold'>Automatic</h2>
            </div>
            <div>
              <p>Fuel</p>
              <h2 className='text-[#063d64] font-bold'>Petrol</h2>
            </div>
            <div>
              <p>Body Style</p>
              <h2 className='text-[#063d64] font-bold'>SUV</h2>
            </div>
            <div>
              <p>Test Drive</p>
              <h2 className='text-[#063d64] font-bold'>No</h2>
            </div>
            <div>
              <p>Highlights 2</p>
              <h2 className='text-[#063d64] font-bold'>Ready</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehicalsInfo
