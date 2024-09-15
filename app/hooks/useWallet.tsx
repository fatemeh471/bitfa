"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { WALLETS } from "../endpoints/wallet";
import { SORT } from "../constants/enums";

const useWallets = (initialPage = 1, initialSortOrder = SORT.ASC) => {
  const [wallets, setWallets] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [sortOrder, setSortOrder] = useState<string>(initialSortOrder);
  const [loading, setLoading] = useState(true);

  const fetchWallets = useCallback(() => {
    setLoading(true);
    axios
      .get(WALLETS, {
        params: {
          network: "eth",
          page: page,
          limit: 5,
          sortBy: "netProfit",
          sortOrder: sortOrder,
        },
      })
      .then((res: any) => {
        setWallets(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, setPage, sortOrder]);

  useEffect(() => {
    fetchWallets();
  }, [fetchWallets]);

  return {
    wallets,
    loading,
    page,
    setPage,
    sortOrder,
    setSortOrder,
  };
};

export default useWallets;
