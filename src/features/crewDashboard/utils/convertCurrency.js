export const FormatCurrency = (currency, value) => {
  const earningsNGN = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: currency,
  }).format(value);
  return earningsNGN;
};

export const FormatNGN = (amount) => {
  return amount.toLocaleString("en-us", {
    minimumFractionDigits: 2,
    maxmumFractionDigits: 2,
  });
};
