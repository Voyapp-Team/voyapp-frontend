export default function AcceptedDocument() {
  const acceptedDocuments = [
    {
      name: "Utility Bill",
      image: "/utility-icon.svg",
    },
    {
      name: "Bank Statement",
      image: "/withdrawal/bank-icon.svg",
    }
  ];

  return (
    <div className="flex flex-col gap-6 w-full bg-[#FFFFFF] p-6 rounded-4xl">
      <p className="flex items-center max-w-[373px] w-fit bg-[#EAFFFC]  font-manrope font-medium text-[14px] leading-[22.75px] px-5 py-2 gap-3 text-[#3C4A46] rounded-[20px]">
        <img src="/alert-icon.svg" alt="Alert Icon" />
        Document must not be older than 3 months.
      </p>
      
      <p className="font-manrope font-bold text-[12px] leading-4 tracking-[1.2px] text-[#6C7A76]">ACCEPTED DOCUMENTS</p>
      <div className="flex flex-col gap-4">
        {acceptedDocuments.map((document, index) => (
          <div key={index} className="flex items-center gap-2 bg-[#F6F3F2] p-4  rounded-[12px] w-full max-w-[432px]">
            <div className="w-10 h-10 rounded-[10px] bg-[#E5E2E1] flex items-center justify-center">
              <img src={document.image} alt={document.name} />  
            </div> 
            <p className="font-montserrat font-semibold text-[16px] leading-6 text-[#1C1B1B]">{document.name}</p>
          </div>
        ))} 
      </div>

    </div>
  );    

}