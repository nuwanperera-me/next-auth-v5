import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center space-x-2 bg-destructive/15 text-destructive text-sm p-3 rounded-sm">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};