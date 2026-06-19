export const handleCopy = async (value) => {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
        setCopied(false);
    }, 2000);
};