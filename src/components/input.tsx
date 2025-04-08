export function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="focus:ring-purple-dark w-full rounded-lg border border-gray-700 bg-gray-500 p-4 text-gray-100 placeholder:text-gray-300 focus:ring-1 focus:outline-none"
      {...props}
    />
  );
}
