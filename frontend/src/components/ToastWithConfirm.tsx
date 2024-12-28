"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

// Componente con confirmación y manejo de carga
interface ToastWithConfirmProps {
  title: string; // Título del botón que recibimos como prop
  onConfirm: () => void; // Función que se ejecutará cuando se confirme
  loading: boolean; // Estado de carga
  event: string; // Evento que se mostrará en el toast
  description: string; // Descripción que se mostrará en el toast
}

export const ToastWithConfirm = ({ title, onConfirm, loading, event, description }: ToastWithConfirmProps) => {
  const handleShowToast = () => {
    const id = toast.warning(event, { // Usamos el prop `event` para el mensaje principal
      description: description, // Usamos el prop `description` para la descripción del evento
      className: "bg-yellow-400 border-0 border-none",
      duration: 10000, // El toast se cierra después de 10 segundos
      action: {
        label: "Confirm",
        onClick: () => {
          onConfirm(); // Llamamos a la función de confirmación pasada por props
          toast.dismiss(id); // Cerrar el toast
        },
      },
      cancel: {
        label: "Close",
        onClick: () => {
          toast.dismiss(id); // Cerrar el toast cuando se hace clic en "Close"
        },
      },
    })
  }

  return (
    <Button
      variant="outline"
      type="button"
      onClick={handleShowToast}
      disabled={loading} // Desactivar el botón mientras se está cargando
    >
      {loading ? "Loading..." : title} {/* Cambiar el texto según el estado de carga */}
    </Button>
  )
}
