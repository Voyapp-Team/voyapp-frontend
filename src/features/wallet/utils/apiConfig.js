// export const CURRENCY_API = {
//   BASE_URL: `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`,
//   DEFAULT_BASE: 'USD',
//   API_KEY: '0ec586b3ad708f1627df257a',
// };

// token to currrency
export const CRYPTO_API = {
  BASE_URL: "https://api.coingecko.com/api/v3/simple/price",
  TOKEN_ID: "tether",
  API_KEY: "CG-qEp4j9g2up761cV8JSnue4Cb",
};

// https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-qEp4j9g2up761cV8JSnue4Cb

export const SUPPORTED_FIAT = [
  {
    id: "ngn",
    label: "NGN",
    name: "Nigerian Naira",
    symbol: "₦",
    img: "https://pub-c5e31b5cdafb419a86a69d5d341ebd84.r2.dev/fiat/NGN.png",
  },
  {
    id: "kes",
    label: "KES",
    name: "Kenyan Shilling",
    symbol: "KSh",
    img: "https://images.abstractapi.com/v1/flags/ke.png",
  },
  {
    id: "zar",
    label: "ZAR",
    name: "South African Rand",
    symbol: "R",
    img: "https://images.abstractapi.com/v1/flags/za.png",
  },
  {
    id: "gbp",
    label: "GBP",
    name: "British Pound",
    symbol: "£",
    img: "https://images.abstractapi.com/v1/flags/gb.png",
  },
  {
    id: "usd",
    label: "USD",
    name: "US Dollar",
    symbol: "$",
    img: "https://pub-c5e31b5cdafb419a86a69d5d341ebd84.r2.dev/fiat/USD.png",
  },
];

export const SUPPORTED_TOKENS = [
  {
    id: "tether",
    label: "USDT",
    name: "Tether",
    symbol: "₮",
    img: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
  },
];
