export default function KycForm({ children, ...props }) {
  return (
    <form {...props} className="flex flex-col w-full gap-10">
      {children}
    </form>
  );
}
