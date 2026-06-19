import { SearchIcon } from '@/src/components/ui/Icons';

export default function MemberSearch({ value, handleChange }) {
  return (
    <div className="w-full h-[63px] ">
      <div className="relative">
        <input
          type="text"
          className="bg-white w-full h-[55px] rounded-xl text-[#6C7A76] border outline-none py-1 pl-10 pr-4 placeholder:text-[#6C7A76] placeholder:w-[383px] placeholder:h-[20px] placeholder:font-manrope placeholder:font-regular placeholder:text-[15px] placeholder:leading-[100%] border-[#DDDDDD]"
          placeholder="Search by Voya username"
          // name=''
          value={value}
          onChange={handleChange}
        />
        <SearchIcon className="absolute bottom-4.5 left-3.5 " />
      </div>
    </div>
  );
}
