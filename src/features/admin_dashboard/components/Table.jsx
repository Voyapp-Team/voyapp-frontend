export const TableWrapper = ({ children }) => {
  return (
    <div className="mt-5 w-full overflow-hidden min-w-0 rounded-lg  bg-white">
      <div className="w-full overflow-x-auto [webkit-overflow-scrolling:touch]">
        {children}
      </div>
    </div>
  );
};

export const Table = ({ children }) => {
  return <table className="min-w-full table-auto h-fit">{children}</table>;
};
