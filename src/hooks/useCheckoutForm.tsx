import { useState } from "react";

export const useCheckoutForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openCheckoutForm = () => {
    setIsFormOpen(true);
  };

  const closeCheckoutForm = () => {
    setIsFormOpen(false);
  };

  return {
    isFormOpen,
    openCheckoutForm,
    closeCheckoutForm
  };
};