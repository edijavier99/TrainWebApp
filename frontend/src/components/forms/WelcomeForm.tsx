"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { WelcomeFormValues, welcomeFormSchema } from "./schemas/welcomeFormSchema"
import InputForm from "./InputForm"
import { useNavigate } from "react-router-dom"
import { usePostAxiosRequest } from "@/hooks/usePostAxiosRequest"
import { useEffect, useRef } from "react"
import { ToastWithConfirm } from "../ToastWithConfirm"
import { toast } from "sonner"

export const WelcomeForm = () => {
  const navigate = useNavigate()

  // Usar el hook para manejar la solicitud POST
  const [{ loading, data, error }, postData] = usePostAxiosRequest<any, WelcomeFormValues>(
    `${import.meta.env.VITE_BACKEND_URL}api/client/register/`
  )

  // Mostrar mensajes de éxito o error basados en los estados del hook
  useEffect(() => {
    if (data) {
      toast.success("Success", {
        description: `The client ${data.client_name} has been created.`,
      })
      navigate("/calendar/") // Navega al calendario en caso de éxito
    }
    if (error) {
      toast.error("Error creating client", {
        description: error.client_email,
        className:"bg-red-500 border-0"
      })
    }
  }, [data, error, toast, navigate])

  const { control, handleSubmit, formState: { errors }, reset } = useForm<WelcomeFormValues>({
    resolver: zodResolver(welcomeFormSchema),
  })

  const formRef = useRef<HTMLFormElement | null>(null) // Referencia al formulario

  const onSubmit: SubmitHandler<WelcomeFormValues> = (data) => {
    postData(data) // Ejecutar la solicitud POST solo si el usuario confirma
    reset() // Resetear el formulario después del envío
  }

  const handleConfirmation = () => {
    toast.dismiss() // Cerrar el Toast después de la confirmación

    // Ejecutar el submit programático del formulario
    if (formRef.current) {
      handleSubmit(onSubmit)() // Ejecutamos el submit del formulario
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" ref={formRef}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <InputForm
          name="client_name"
          label="Name"
          control={control}
          type="text"
          error={errors.client_name?.message}
        />
        <InputForm
          name="client_surname"
          label="Surname"
          control={control}
          type="text"
          error={errors.client_surname?.message}
        />
        <InputForm
          name="client_email"
          label="Email Address"
          control={control}
          type="email"
          error={errors.client_email?.message}
        />
      </div>

      <div className="mt-6 flex items-center space-x-4">
        <div className="flex-1">
          <label htmlFor="userAgreement" className="text-gray-600">
            <input
              type="checkbox"
              id="userAgreement"
              className="mr-2 bg-[#FF7F50]"
            />
            I agree to the <a href="#" className="text-[#FF7F50] underline">Terms and Conditions</a>
          </label>
        </div>
      </div>

      <p className="text-black text-sm">*Please make sure to verify your email, as this email will be used for all communications and to receive meeting invitations.</p>

      <div className="mt-8 flex justify-end">
        {/* Usamos el componente ToastWithConfirm, pasando las props necesarias */}
        <ToastWithConfirm
          title="Continue"
          onConfirm={handleConfirmation} 
          loading={loading}
          event="Is this your email?"
          description="Confirm that the email you entered is correct, as it will be used for all future meeting invitations."
        />
      </div>
    </form>
  )
}
