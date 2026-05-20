"use clients";
import WithdrawalAmountInput from "../components/common/WithdrawalAmountInput";
import BankTransferDetailSummary from "../components/BankTransferDetailSummary";
import Button from "@/src/components/ui/Button";

export default function BankTransferDetailsScreen() {
    return (
        <div className=" flex flex-col items-center w-full max-w-[448px] bg-white md:rounded-[50px]  px-[24px] pt-[98px] pb-[48px]">
            <WithdrawalAmountInput />
            <BankTransferDetailSummary />
            <Button className="w-full max-w-[400px] mt-6" variant="primary">Confirm Withdrawal</Button>
        </div>
    )
}