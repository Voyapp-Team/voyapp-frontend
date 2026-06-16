"use client";

import {
  useEffect,
  useState,
} from 'react';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { ShieldNotCheckedIcon } from '@/src/components/ui/Icons';

import WalletBalanceCard from '../components/BalanceCard';
import { CRYPTO_API } from '../utils/apiConfig';

const userHoldingTokens = [
  { id: "usd-coin", volume: 900.0, symbol: "USDC" },
  { id: "tether", volume: 200.0, symbol: "USDT" },
  { id: "celo", volume: 40.5, symbol: "CELO" },
  { id: "ethereum", volume: 0.05, symbol: "ETH" },
  { id: "bitcoin", volume: 0.0009, symbol: "BTC" },
];

const address = "0x71C234567890ABCDEF1234567890GHIJKL1263a9";

export const WalletScreen = () => {
  const router = useRouter();

  const coinIds = userHoldingTokens.map((token) => token.id).join(",");

  const [coinBalance, setCoinBalance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);

  const [viewBalance, setViewBalance] = useState(true);

  const toogleBalance = () => {
    setViewBalance((prev) => !prev);
  };

  useEffect(() => {
    const getMarketData = async () => {
      try {
        setLoading(true);
        const responce = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&x_cg_demo_api_key=${CRYPTO_API.API_KEY}`,
        );

        const liveData = await responce.json();

        // const sortedCoins = userHoldingTokens[userHoldingTokens.id]
        setCoinBalance(liveData);
        //console.log("Live Coin Data:", liveData);
      } catch (err) {
        console.error("Error fetching currency rates:", err);
      } finally {
        setLoading(false);
      }
    };

    getMarketData();
  }, []);

  const renderTokenBalance = (coin, price) => {
    const matchToken = userHoldingTokens.find((token) => token.id === coin);

    const tokenBalance = matchToken ? price * matchToken.volume : 0;

    const totalTokenBalance = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tokenBalance);
    return totalTokenBalance;
  };

  const totalBalance = (holdings, marketData) => {
    let totalWalletBalance = 0;

    holdings.forEach((token) => {
      const livePrice = marketData.find((data) => data.id === token.id);

      if (livePrice) {
        const totalValue = token.volume * livePrice.current_price;

        totalWalletBalance += totalValue;
      }
    });
    return Number(totalWalletBalance);
  };

  const usdBalance = totalBalance(userHoldingTokens, coinBalance);

  const ngnRate = 1400;
  const usdToNgn = usdBalance * ngnRate;

  const formattedUsdBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(usdBalance);

  const formattedNgnBalance = usdToNgn.toLocaleString("en-us", {
    minimumFractionDigits: 2,
    maxmumFractionDigits: 2,
  });

  return (
    <>
      {/* // <div className="w-full sm:mx-auto"> */}
      {/* Main content container */}
      {/* <div className="w-full sm:max-w-lg space-y-4 mx-auto"> */}
      <WalletBalanceCard
        usdBalance={formattedUsdBalance}
        ngnBalance={formattedNgnBalance}
        loading={loading}
        toggleBalance={toogleBalance}
        viewBalance={viewBalance}
        walletAddress={address}
      />
      {/* </div> */}
      {loading ? (
        <div className="flex flex-col w-full max-w-3xl py-10 px-4 mx-auto text-black/90 bg-white rounded-xl mt-9">
          <h2 className="animate-pulse text-center font-bold">
            Loading Token......
          </h2>
        </div>
      ) : (
        <div className="flex flex-col w-full  sm:max-w-{976px} py-10 px-4 mx-auto text-black/90 bg-white rounded-xl mt-9">
          {coinBalance.map((coin) => (
            <div
              key={coin.id}
              className={`flex justify-between p-3 items-center border border-[#E1E1E1] h-20 rounded-xl`}
            >
              <div className="flex items-center gap-2">
                {/* TOKEN IMG */}
                <div className="w-[48px] h-[48px] rounded-full bg-[#F0EDEC] flex items-center justify-center">
                  <img
                    src={coin.image}
                    alt=""
                    className="object-cover w-[48px] h-[48px]"
                  />{" "}
                </div>
                {/* TOKEN NAME AND CHAIN */}
                <div className="flex flex-col ">
                  <p className="font-manrope text-base font-bold leading-6 text-[#1C1B1B]">
                    {" "}
                    {coin.symbol.toUpperCase()}
                  </p>
                  <span className="font-manrope font-regular text-sm leading-5 text-[#94A3B8]">
                    {coin.name}
                  </span>
                </div>
              </div>
              {/* price, convert and send buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                {/* token price */}
                <div className="flex flex-col">
                  <p className="text-right font-manrope text-base font-bold leading-6 text-[#1C1B1B]">
                    {renderTokenBalance(coin.id, coin.current_price)}
                  </p>
                  <span className="flex gap-1 justify-end font-manrope font-regular text-sm leading-5 text-[#94A3B8] text-right">
                    {/* <p>
                    {
                      userHoldingTokens.find((token) => token.id === coin.id)
                        ?.balance
                    }
                  </p> */}
                    <p>
                      {
                        userHoldingTokens.find((token) => token.id === coin.id)
                          ?.volume
                      }
                    </p>
                    {/* token symbol */}
                    <p>
                      {userHoldingTokens
                        .find((token) => token.id === coin.id)
                        ?.symbol.toUpperCase()}
                    </p>
                  </span>
                </div>
                {/* Convert and send buttons */}
                <div className="flex flex-wrap sm:flex-nowrap gap-2 w-fit ">
                  <button
                    type="button"
                    className="cursor-pointer text-[#00C2A8] text-sm font-bold leading-5 tracking-wide font-manrope"
                    onClick={() =>
                      router.push(`/dashboard/wallet/convertToken`)
                    }
                  >
                    CONVERT
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-[#00C2A8] text-sm font-bold leading-5 tracking-wide font-manrope"
                    onClick={() =>
                      router.push(
                        `/dashboard/withdrawal/${coin.name.toLowerCase()}`,
                      )
                    }
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center w-full mx-auto pt-9">
        <div
          className={`${cancel ? "hidden" : "block"} flex justify-center p-3 absolute w-fit my-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl`}
        >
          <div className="flex gap-3 items-center w-full">
            <ShieldNotCheckedIcon className="w-10 h-10" />
            <div>
              <h2 className="text-black/90 font-bold text-sm tracking-wide">
                Your funds are safe
              </h2>
              <p className="text-black/40 text-xs">
                Multi security and cold storage protection enabled.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCancel(!cancel)}
            className={`flex justify-end w-fit `}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/*       
    // </div> */}
    </>
  );
};
