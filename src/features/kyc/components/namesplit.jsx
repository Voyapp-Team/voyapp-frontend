export default function NameSplit({ value, handleChange }) {
  return (
    <div className="w-full h-[63px] ">
      <div className="">
        <input
          type="text"
          className="bg-white w-full h-[55px] rounded-xl text-[#6C7A76] border outline-none py-1 pl-10 pr-4 text-center placeholder:text-[#D2D2D2]  placeholder:h-7 placeholder:font-plusJakartaSans placeholder:font-bold placeholder:sm:text-lg placeholder:text-sm placeholder:leading-7 border-[#DDDDDD]"
          placeholder="Name Payment"
          // name=''
          // value={value}
          // onChange={handleChange}
        />
      </div>
    </div>
  );
}
