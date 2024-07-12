import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {

if (!message) return null;

return (
  <div className="flex items-center space-x-2 bg-emerald-500/15 text-emerald-500 text-sm p-3 rounded-sm">
    <CheckCircledIcon className="w-4 h-4" />
    <p>{message}</p>
  </div>
);
}