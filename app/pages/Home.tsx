"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Table from "../shared/table";
import axios from "axios";

const SORT = {
  ASC: "asc",
  DEC: "desc",
};

const HomePage = () => {
    const [wallets, setWallets] = useState([]);
    const [page, setPage] = useState(1);
    const [sortOrder, setSortOrder] = useState<string | undefined>();
    const [loading, setLoading] = useState(true);
  
    const fetchWallets = useCallback(() => {
      setLoading(true);
      axios
        .get("https://onchain.dextrading.com/valuable_wallets", {
          params: {
            network: "eth",
            page: page,
            limit: 5,
            sortBy: sortOrder && "netProfit",
            sortOrder,
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
    }, [setWallets, page, sortOrder]);
  
    useEffect(() => {
      fetchWallets();
    }, [fetchWallets]);
    console.log(wallets,'wallets')
  return (
    <>
      <div className="overflow-x-auto w-full">
        <Table walletData={wallets} />
      </div>
    </>
  );
};

export default HomePage;
