import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const FontSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-fill flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", FontSans.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
