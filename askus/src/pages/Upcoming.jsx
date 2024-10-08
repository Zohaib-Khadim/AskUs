import React, { useState } from 'react';
import Card from '../components/Card';

const Upcoming = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
// Pagination Logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  return (
    <>
      <div className="mx-4 md:mx-10 lg:mx-20 border mt-8 md:mt-12 lg:mt-16 rounded-lg pb-5 md:pb-8 lg:pb-10 bg-white ">
        <p className="text-center my-6 md:my-8 lg:my-10 font-bold text-[#063d64] text-xl md:text-2xl lg:text-3xl">
          Upcoming Cars in the <br /> Auction Queue
        </p>
        {/*Mapping on the Cards*/}
        {currentCards.map((card, index) => (
          <Card key={index} />
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="border rounded px-2 md:px-3 py-1 mx-1"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`border rounded px-2 md:px-3 py-1 mx-1 ${
                currentPage === index + 1 ? 'bg-[#063d64] text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border rounded px-2 md:px-3 py-1 mx-1"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
