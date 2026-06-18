import { BankIcon } from "./ui/Icons";

export default function BankIconDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-8">
      {/* Icon at 34x34 (original size) */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <BankIcon className="w-full h-full" />
        </div>
        <span className="text-sm text-gray-600">34x34 (original)</span>
      </div>

      {/* Icon at 48x48 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <BankIcon className="w-full h-full" />
        </div>
        <span className="text-sm text-gray-600">48x48</span>
      </div>

      {/* Icon at 64x64 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 flex items-center justify-center">
          <BankIcon className="w-full h-full" />
        </div>
        <span className="text-sm text-gray-600">64x64</span>
      </div>

      {/* Icon at 80x80 */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 flex items-center justify-center">
          <BankIcon className="w-full h-full" />
        </div>
        <span className="text-sm text-gray-600">80x80</span>
      </div>
    </div>
  );
}
