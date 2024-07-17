import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <ExclamationTriangleIcon className="w-12 h-12 text-destructive mt-12" />
        <p className="text-secondary-foreground text-center text-base">
          There was an error processing your request. Please try again.
        </p>
      </div>
    </CardWrapper>
  );
};
