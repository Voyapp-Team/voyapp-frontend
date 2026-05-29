// import React, { useState, useEffect } from 'react';
// import { CURRENCY_API } from "./apiConfig";

// export default function CurrencyConverterAPI() {
//   const [rates, setRates] = useState({});
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [convertedAmount, setConvertedAmount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // 1. Fetch live rates on component mount
//   useEffect(() => {

//     const fetchRate = async () => {
//       try {
//         const res = await fetch(`${CURRENCY_API.BASE_URL}/${CURRENCY_API.DEFAULT_BASE}`)

//         if(!res.ok){
//           throw new Error(`Http error, status: ${res.status}`);

//         }

//         const data = await res.json();

//         const setRates(data.rates);
//       } catch (error) {
//         console.error("Error fetching currency rates": error);

//       } finally {
//         setLoading(false);
//       }

//     }

//     fetchRate();

//   }, []);

//   // 2. Recalculate whenever amount or currencies change
//   useEffect(() => {
//     if (rates[fromCurrency] && rates[toCurrency]) {
//       const result = amount * (rates[toCurrency] / rates[fromCurrency]);
//       setConvertedAmount(Number(result.toFixed(2)));
//     }
//   }, [amount, fromCurrency, toCurrency, rates]);

//   if (loading) return <p>Loading live exchange rates...</p>;

//   return (
//     <div className="p-6 max-w-md mx-auto bg-card rounded-xl shadow-md space-y-4">
//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(Number(e.target.value))}
//         className="border p-2 rounded w-full"
//       />
//       <div className="flex gap-2">
//         <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="border p-2 rounded w-1/2">
//           {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr}</option>)}
//         </select>
//         <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="border p-2 rounded w-1/2">
//           {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr}</option>)}
//         </select>
//       </div>
//       <p className="text-xl font-bold">{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
//     </div>
//   );
// }
