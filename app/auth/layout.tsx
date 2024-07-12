export default function AuthLayout({ children} : { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-b from-purple-600 to-purple-700">
      {children}
    </div>
  );
}