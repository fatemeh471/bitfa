"use client";
import Table from "../shared/table";
import useWallets from "../hooks/useWallet";
import Spinner from "../shared/loading";
import Pagination from "../shared/pagination";

const HomePage = () => {
  const { wallets, loading, page, setPage, sortOrder, setSortOrder } =
    useWallets();

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
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
          <Pagination />
        </>
      )}
    </div>
  );
};

export default HomePage;
