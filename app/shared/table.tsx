import React from "react";
type TabelType = {
  walletData: Array<any>;
  onSortToggle: () => void;
  sortOrder: string;
};

const Table = ({ walletData, onSortToggle, sortOrder }: TabelType) => {
  return (
    <>
      <table className="w-full text-left border-collapse">
        <>
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 border-b">Wallet Address</th>
              <th
                className="py-4 px-6 border-b cursor-pointer flex gap-4 items-center"
                onClick={onSortToggle}
              >
                <p>Net Profit</p>
                {sortOrder === "asc" ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {walletData.map((wallet) => (
              <tr key={wallet.walletAddress} className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b flex items-center gap-4">
                  <a
                    href={`/wallet/${wallet.walletAddress}`}
                    className="text-blue-600 hover:underline"
                  >
                    {wallet.walletAddress}
                  </a>
                </td>
                <td className="py-4 px-6 border-b">{wallet.netProfit}</td>
              </tr>
            ))}
          </tbody>
        </>
      </table>
    </>
  );
};

export default Table;
