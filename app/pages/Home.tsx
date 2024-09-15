"use client";
import Table from "../shared/table";
import useWallets from "../hooks/useWallet";
import Spinner from "../shared/loading";
import Pagination from "../shared/pagination";

const HomePage = () => {
  const {
    wallets,
    loading,
    page,
    setPage,
    sortOrder,
    setSortOrder,
    totalCount,
    pageSize,
  } = useWallets();

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="overflow-x-auto w-full flex-col flex items-center h-[100vh] self-center justify-center p-10">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Table
            walletData={wallets}
            onSortToggle={toggleSortOrder}
            sortOrder={sortOrder}
          />
          <Pagination
            currentPage={page}
            totalCount={totalCount}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
