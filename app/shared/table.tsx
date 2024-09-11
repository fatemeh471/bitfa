"use client";

const Table = ({ walletData }) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>Wallet Address</th>
            <th className="cursor-pointer flex gap-4 items-center">
              <p>Net Profit</p>
            </th>
            <th>Winrate</th>
          </tr>
        </thead>
        <tbody>
          {walletData &&
            walletData.length > 0 &&
            walletData.map((wallet: any) => (
              <tr key={wallet.walletAddress}>
                <td className="flex items-center gap-4">
                  <div className="bg-[#0c0c0f] p-1 rounded-md">
                    {/* <Image
                            src={"/dextrading-logo.svg"}
                            width={24}
                            height={24}
                            alt="logo"
                          /> */}
                  </div>
                  <a href={`/wallet/${wallet.walletAddress}`}>
                    {wallet.walletAddress}
                  </a>
                </td>
                <td>{wallet.netProfit}</td>
                <td
                  className="text-sm"
                  // style={{
                  //   color:
                  //     wallet.winRate <= 10
                  //       ? COLORS.RED
                  //       : wallet.winRate < 30
                  //       ? COLORS.ORANGE
                  //       : wallet.winRate < 50
                  //       ? COLORS.YELLOW
                  //       : wallet.winRate <= 100
                  //       ? COLORS.GREEN
                  //       : "white",
                  // }}
                >
                  {wallet.winRate.toFixed(2)}%
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
