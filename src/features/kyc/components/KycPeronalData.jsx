export default function KycPersonalData({ children, ...props }) {
  return (
    <form {...props} className="flex flex-col items-center w-full gap-10">
      {children}
    </form>
  );
}
