"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { WALLETS } from "../endpoints/wallet";
import { SORT } from "../constants/enums";

const PAGE_SIZE = 5;
const totalCount = 350;
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
          limit: PAGE_SIZE,
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
  }, [page, sortOrder]);

  useEffect(() => {
    fetchWallets();
  }, [page, sortOrder]);

  return {
    wallets,
    loading,
    page,
    setPage,
    sortOrder,
    setSortOrder,
    totalCount, 
    pageSize: PAGE_SIZE,
  };
};

export default useWallets;
