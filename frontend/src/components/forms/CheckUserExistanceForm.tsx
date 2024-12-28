import InputForm from "./InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { userExistenceSchema, FormValuesUserExistence } from "./schemas/checkUserExistenceForm";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export const CheckUserExistenceForm = () => {
  const navigate = useNavigate();
  
  // Hook para formularios
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValuesUserExistence>({
    resolver: zodResolver(userExistenceSchema),
  });

  // Estado para manejar la carga y errores
  const [loading, setLoading] = useState<boolean>(false);

  // Llamada a la API para verificar si el usuario existe
  const onSubmit: SubmitHandler<FormValuesUserExistence> = async (formData) => {
    const email = formData.user_email;

    setLoading(true);  // Activa el estado de carga

    try {
      // Realizar la llamada HTTP directamente usando axios
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/clients/${email}`);

      // Si la respuesta es exitosa (200), redirigir a la página del calendario
      if (response.status === 200) {
        reset();  // Limpiar el formulario
        navigate("/calendar/");  // Redirigir a la página de calendario
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          // Si la respuesta es 404, redirigir a la página de registro sin registrar el error
          navigate("/booking/");  // Redirigir a la página de booking
        } else {
          // Si hay otro error (por ejemplo, problemas con la conexión), manejarlo
          console.error("Error inesperado:", err);  // Mostrar el error general
        }
      } else {
        // Si no es un error de Axios, manejamos cualquier otro tipo de error inesperado
        console.error("Error desconocido:", err);
      }
    } finally {
      setLoading(false);  // Desactivar el estado de carga
    }
  };

  return (
    <form className="space-y-5 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-md text-gray-700">
        You're one step closer to transforming your life! Enter your email below, and let’s get started on this exciting journey. Thank you for trusting us!
      </p>
      
      <InputForm
        name="user_email"
        label="example@gmail.com"
        control={control}
        type="email"
        error={errors.user_email?.message}
      />
      
      <Button className="w-full" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </Button>

      <p className="text-center text-gray-400 text-sm">&copy; 2017-2024</p>
    </form>
  );
};
