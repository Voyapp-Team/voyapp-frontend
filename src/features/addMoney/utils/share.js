export const shareAccountDetails = async (account) => {
  const text = `Bank Transfer Details
Account Number: ${account.accountNumber}
Account Name: ${account.accountName}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Voya Account Details",
        text,
      });
    } catch (err) {
      console.log("Share cancelled");
    }
  } else {
    await navigator.clipboard.writeText(text);
  }
};