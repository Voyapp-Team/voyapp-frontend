import { CheckIcon } from '@/src/components/ui/Icons';

export const Success = ({ message }) => {
  if (!message) return;
  return (
    <div className="flex flex-row items-center gap-2 justify-center w-full text-center h-[62px] bg-[#00C2A833] border border-[#00C2A84D] rounded-2xl text-[#006B5C] mb-4">
      <CheckIcon />
      <p className="font-plusJakartaSans font-bold text-lg leading-7 text-center">
        {message}
      </p>
    </div>
  );
};
