"use client";

import React, {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import {
  ArrowLeftIcon,
  BarChartIcon,
  CheckedCircleIcon,
  DotIcon,
  NotificationIcon,
  SettingIcon,
  ShieldNotCheckedIcon,
  SwitchIcon,
} from '@/src/components/ui/Icons';
import Modal from '@/src/components/ui/Modal';

import {
  CRYPTO_API,
  SUPPORTED_FIAT,
  SUPPORTED_TOKENS,
} from '../utils/apiConfig';

export const ConvertTokenScreen = () => {
  const router = useRouter();
  const [rate, setRate] = useState(0);
  const [sourceAmount, setSourceAmount] = useState(1);
  const [tokenBalance] = useState(900.0);
  const [fiatBalance] = useState(250000.0); //static local wallet balance
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [displayError, setDisplayError] = useState(false);

  // Directions: true = USDT to Fiat | false = Fiat to USDT
  const [isTokenToFiat, setIsTokenToFiat] = useState(true);
  const [selectedFiat, setSelectedFiat] = useState(SUPPORTED_FIAT[0]);
  const [selectedToken] = useState(SUPPORTED_TOKENS[0]); // Defaulting to USDT

  // 1. Fetch live rate based on current fiat selection
  useEffect(() => {
    const fetchRate = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${CRYPTO_API.BASE_URL}?vs_currencies=${selectedFiat.id}&ids=${CRYPTO_API.TOKEN_ID}&x_cg_demo_api_key=${CRYPTO_API.API_KEY}`,
        );

        if (!res.ok) throw new Error(`Http error, status: ${res.status}`);

        const data = await res.json();
        const freshRate = data[CRYPTO_API.TOKEN_ID][selectedFiat.id];
        setRate(freshRate);
      } catch (err) {
        console.error("Error fetching currency rates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [selectedFiat]);

  // 2. Dual Conversion Calculation Logic
  const calculateDestinationAmount = () => {
    if (loading || !rate) return "0.00";

    // USDT -> FIAT: Multiply
    if (isTokenToFiat) {
      return (sourceAmount * rate).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    // FIAT -> USDT: Divide
    return (sourceAmount / rate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4, // More decimals for crypto fractions
    });
  };

  const handleFiatChange = (e) => {
    const match = SUPPORTED_FIAT.find((fiat) => fiat.id === e.target.value);
    if (match) setSelectedFiat(match);
  };

  // Handles clicking the "MAX" button depending on which asset is the source
  const handleMaxClick = () => {
    setSourceAmount(isTokenToFiat ? tokenBalance : fiatBalance);
  };

  // Structural shortcuts based on directions
  const currentSourceAsset = isTokenToFiat ? selectedToken : selectedFiat;
  const currentTargetAsset = isTokenToFiat ? selectedFiat : selectedToken;
  const currentSourceBalance = isTokenToFiat
    ? `${tokenBalance} USDT`
    : `${selectedFiat.symbol}${fiatBalance.toLocaleString()}`;

  //Conversion Execution Handler
  const handleConvert = () => {
    // 1. Validate input
    const numericSourceAmount = Number(sourceAmount);
    if (isNaN(numericSourceAmount) || numericSourceAmount <= 0) {
      setErrorMsg("Please enter a valid amount greater than zero.");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);

      return;
    }
    if (isTokenToFiat && numericSourceAmount > tokenBalance) {
      setErrorMsg("Insufficient token balance.");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    setLoading(true);
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);

      setLoading(false);
    }, 2000);
  };
  return (
    <main className="flex flex-col min-h-screen w-full bg-[#f5f5f7] items-center">
      {/* Header */}
      <div className="flex justify-between items-center p-3 w-full bg-[#ffff] border-b">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <button onClick={() => router.back()}>
            <ArrowLeftIcon className="w-5 h-5 text-black/90" />
          </button>
          <p className="text-(--color-brand-primary-deep) font-bold">
            Convert Tokens
          </p>
        </div>
        <div className="flex items-center gap-4">
          <NotificationIcon className="w-5 h-5 text-black/90" />
          <SettingIcon className="w-5 h-5 text-black/70" />
        </div>
      </div>

      {/* Main Content Card container */}
      <div className="w-full max-w-xl p-4 space-y-4">
        <div className="flex flex-col rounded-2xl bg-[#FFFF] border p-4 shadow-sm relative gap-3">
          <div className="flex flex-col relative">
            {/* SECTION 1: FROM (SOURCE) */}
            <div className="bg-[#F8F8F8] border border-[#BBCAC4]/15 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-black/50 font-semibold tracking-wider">
                <p>FROM</p>
                <p>Balance: {currentSourceBalance}</p>
              </div>
              <div className="flex justify-between items-center gap-4">
                {/* Token/Fiat Visual Asset display */}
                <div className="flex items-center gap-2 bg-[#E2E2E2] p-2 px-3 rounded-full">
                  <img
                    src={currentSourceAsset.img}
                    alt=""
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  {isTokenToFiat ? (
                    <span className="font-bold text-sm text-black/90">
                      {selectedToken.label}
                    </span>
                  ) : (
                    <select
                      value={selectedFiat.id}
                      onChange={handleFiatChange}
                      className="bg-transparent font-bold text-sm text-black/90 outline-none"
                    >
                      {SUPPORTED_FIAT.map((fiat) => (
                        <option key={fiat.id} value={fiat.id}>
                          {fiat.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* Input Value */}
                <div className="flex items-center gap-2 flex-1 justify-end">
                  <input
                    type="number"
                    value={sourceAmount}
                    onChange={(e) => setSourceAmount(Number(e.target.value))}
                    className="bg-transparent text-right outline-none font-bold text-xl text-black/95 w-full"
                    placeholder="0.00"
                  />
                  <button
                    onClick={handleMaxClick}
                    className="text-xs text-(--color-brand-primary-deep) font-bold px-2 py-1 bg-green-800/5 rounded"
                  >
                    MAX
                  </button>
                </div>
              </div>
            </div>

            {/* DIRECTION INTERCHANGE SWITCH BUTTON */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <button
                onClick={() => setIsTokenToFiat(!isTokenToFiat)}
                className="p-4 bg-white border shadow-md rounded-full text-[#BBCAC4] hover:bg-gray-50 transition-transform active:scale-95"
                title="Switch conversion direction"
              >
                <SwitchIcon className="w-5 h-5" />
              </button>
            </div>

            {/* SECTION 2: TO (DESTINATION) */}
            <div className="bg-[#F8F8F8] border border-[#BBCAC4]/15 rounded-xl p-4 flex flex-col gap-3 mt-2.5">
              <div className="flex justify-between items-center text-xs text-black/50 font-semibold tracking-wider">
                <p>TO</p>
              </div>
              <div className="flex justify-between items-center gap-4">
                {/* Target Selector */}
                <div className="flex items-center gap-2 bg-[#E2E2E2] p-2 px-3 rounded-full">
                  <img
                    src={currentTargetAsset.img}
                    alt=""
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  {!isTokenToFiat ? (
                    <span className="font-bold text-sm text-black/90">
                      {selectedToken.label}
                    </span>
                  ) : (
                    <select
                      value={selectedFiat.id}
                      onChange={handleFiatChange}
                      className="bg-transparent font-bold text-sm text-black/90 outline-none"
                    >
                      {SUPPORTED_FIAT.map((fiat) => (
                        <option key={fiat.id} value={fiat.id}>
                          {fiat.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* Destination Output Value */}
                <div className="text-right flex-1 font-bold text-xl text-black/95 px-2">
                  {loading ? (
                    <span className="text-sm text-gray-400 animate-pulse">
                      ...
                    </span>
                  ) : (
                    <div className="text-[#BBCAC4]">
                      {calculateDestinationAmount()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* DATA FEED INDICATOR */}
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#F6F3F2] w-fit py-2 px-3 text-center font-semibold text-black/70 mt-2 rounded-2xl">
              {loading ? (
                <p className="text-gray-400 animate-pulse text-xs">
                  Syncing real-time market data...
                </p>
              ) : (
                <p className="text-sm tracking-wide flex items-center gap-2">
                  <BarChartIcon className="w-3 h-3" /> 1 USDT ={" "}
                  {selectedFiat.symbol}
                  {rate.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}{" "}
                  <DotIcon className="w-2 h-2" />
                </p>
              )}
            </div>
          </div>
          {/* AMOUNT TO RECEIVE */}
          <div className="bg-[#F8F8F8] text-black border border-[#BBCAC4]/15 rounded-xl p-4 flex flex-col justify-center gap-1 mt-2.5">
            <p className="text-center">You receive:</p>
            <p className="text-center text-lg font-bold text-(--color-brand-primary) mb-2">
              {calculateDestinationAmount()}{" "}
              {isTokenToFiat ? selectedFiat.label : selectedToken.label}
            </p>
            <div className="flex justify-between items-center border-t border-t-black/20 pt-2">
              <p className="text-black/70 text-sm font-medium">
                Processing Fee
              </p>
              <p className="font-bold text-black/90">0.1% - $0.50</p>
            </div>
          </div>
          {/* ErrorMsg */}
          {errorMsg.length > 0 && (
            <p className="flex gap-2 items-center text-sm text-red-500 font-semibold">
              <DotIcon fill="#bd0202" /> {errorMsg}
            </p>
          )}
          {/* Convert Buttton */}
          <Button
            onClick={handleConvert}
            className={`tracking-wider font-lighter mt-2`}
          >
            Convert Now
          </Button>
          {/* Cautions */}
          <p className="text-center text-xs sm:text-sm text-black/30">
            By confirming this transaction, you agre to Voya's terms of service.
            Rates are refreshed every 5 seconds to ensure accuracy.
          </p>
          <div className="my-3 bg-[#FFFFFF]/30 flex gap-2.5 justify-center items-center p-2">
            <ShieldNotCheckedIcon className="w-9 h-9" />
            <div>
              <h2 className="text-black/90 font-bold tracking-wide">
                Your funds are safe
              </h2>
              <p className="text-black/40 text-sm">
                Multi secuirty and cold storage protection enabled.
              </p>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div className="flex flex-col items-center gap-4 p-6">
            <div className="flex gap-2 items-center text-black/70 font-bold tracking-wider text-lg">
              <CheckedCircleIcon className="w-5 h-5 font-bold" />{" "}
              <p>CONVERSION SUCCESSFUL</p>{" "}
            </div>
            <Button className={`tracking-wider font-lighter mt-2`}>
              Withdraw
            </Button>
            <Button
              variant="transparent"
              className={`tracking-wider font-lighter mt-2`}
            >
              Go to Dashboard
            </Button>
          </div>
        </Modal>
      )}
    </main>
  );
};
