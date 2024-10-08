import React, { useState } from 'react';

const Pagination = () => {
  const users = [
    { id: 1, name: 'Mohammad ZTK', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 2, name: 'Thomas Charlos', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 3, name: 'William Parker', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 4, name: 'Diana Prince', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 5, name: 'Evan Walker', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 6, name: 'Fiona Green', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 7, name: 'George White', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
    { id: 8, name: 'Hannah Black', Bid_Amount: '45,000 SAR', time: '10 Sec ago' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4; // Set to 4 users per page to achieve 2 pages

  // Calculate the index of the last user on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  // Calculate the index of the first user on the current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Get current users
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages (should be 2)
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="container mx-auto border px-2 lg:px-4 rounded-lg my-5 py-5 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-[#063d64]">
              <th className="px-2 sm:px-4 py-2">Name</th>
              <th className="px-2 sm:px-4 py-2">Bid Amount</th>
              <th className="px-2 sm:px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-2 sm:px-4 py-2">{user.name}</td>
                <td className="border-b border-gray-300 px-2 sm:px-4 py-2">{user.Bid_Amount}</td>
                <td className="border-b border-gray-300 px-2 sm:px-4 py-2">{user.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 flex-wrap">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`border rounded px-2 sm:px-3 py-1 mx-1 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          &lt;
        </button>

        {/* Show page numbers */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => paginate(pageNum)}
              className={`border rounded px-2 sm:px-3 py-1 mx-1 ${currentPage === pageNum ? 'bg-blue-500 text-white' : ''}`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`border rounded px-2 sm:px-3 py-1 mx-1 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
