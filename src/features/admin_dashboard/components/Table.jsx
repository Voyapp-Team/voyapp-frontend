export const TableWrapper = ({ children }) => {
  return (
    <div className="mt-5 overflow-hidden w-fit min-w-0 rounded-lg  bg-white shadow-sm">
      <div className="w-full lg:w-[calc(100vw-21rem)]   overflow-x-auto [webkit-overflow-scrolling:touch]">
        {children}
      </div>
    </div>
  );
};

export const Table = ({ children }) => {
  return <table className="min-w-full table-auto h-fit">{children}</table>;
};
