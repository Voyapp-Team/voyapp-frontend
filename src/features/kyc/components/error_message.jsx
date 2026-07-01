import { XCircleIcon } from '@/src/components/ui/Icons';

export const Error = ({ message }) => {
  if (!message) return;
  return (
    <div className="flex flex-row items-center gap-2 justify-center w-full text-center h-[62px] bg-[#DA000033] border border-[#E96666] rounded-2xl text-[#DA0000] mb-4">
      <XCircleIcon />
      <p className="font-plusJakartaSans font-bold text-lg leading-7 text-center">
        {message}
      </p>
    </div>
  );
};
