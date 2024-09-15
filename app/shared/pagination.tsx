"use client";
import useWallets from "../hooks/useWallet";

const Pagination = () => {
  const { page, setPage } = useWallets();

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button
        onClick={nextPage}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
