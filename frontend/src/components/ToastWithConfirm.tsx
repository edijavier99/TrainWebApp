import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ToastWithConfirmProps {
  title: string;
  onConfirm: () => void;
  loading?: boolean;
  event: string;
  description: string;
  isDisabled?: boolean; // Nueva prop para controlar si el botón está deshabilitado
}

export const ToastWithConfirm = ({
  title,
  onConfirm,
  loading,
  event,
  description,
  isDisabled = false, // Default a 'false' si no se pasa la prop
}: ToastWithConfirmProps) => {
  const [isToastActive, setIsToastActive] = useState(false);

  const handleShowToast = () => {
    if (isToastActive) return; // Prevent showing multiple toasts at the same time

    setIsToastActive(true);

    const id = toast.warning(event, {
      description: description,
      className: "bg-yellow-400 border-0 border-none",
      duration: 10000,
      action: {
        label: "Confirm",
        onClick: () => {
          onConfirm();
          toast.dismiss(id);
          setIsToastActive(false);
        },
      },
      cancel: {
        label: "Close",
        onClick: () => {
          toast.dismiss(id);
          setIsToastActive(false);
        },
      },
    });

    const timeout = setTimeout(() => {
      setIsToastActive(false);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  return (
    <Button
      type="button"
      onClick={handleShowToast}
      disabled={isDisabled || loading || isToastActive} // Deshabilitar el botón según 'isDisabled'
    >
      {loading ? "Loading..." : title}
    </Button>
  );
};
