import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePostAxiosRequest } from "@/hooks/usePostAxiosRequest";
import { useToast } from "@/hooks/use-toast";

// Definir el tipo para la respuesta de la API y la solicitud
interface SubscriberData {
  subscriber_email: string;
}

const BlogSubscribeForm = () => {
  const { toast } = useToast();

  const [subscriberEmail, setSubscriberEmail] = useState<string>("");
  const [{ loading, error }, postData] = usePostAxiosRequest<SubscriberData, { subscriber_email: string }>(`${import.meta.env.VITE_BACKEND_URL}api/susbcribers/`);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSubscriberEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subscriberEmail) {
      return; // No hacer nada si el email está vacío
    }
    const dataToPost = { subscriber_email: subscriberEmail };

    // Llamar al hook para realizar la solicitud POST
    await postData(dataToPost);

    // Verificar el estado de la solicitud
    if (!loading) {
      if (error) {
        // Si hay un error, mostrar el error en el toast
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
      } else {
        // Si no hay error, mostrar éxito en el toast
        toast({
          title: "Success",
          description: "You are now subscribed to our blog!",
          variant: "default",
        });
        setSubscriberEmail(""); // Limpiar el campo después de la suscripción exitosa
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
      <label className="hidden" htmlFor="subscriberEmail">Subscriber Email</label>
      <Input
        id="subscriberEmail"
        name="subscriberEmail"
        type="email"
        className="bg-white text-black"
        placeholder="your@email.com"
        value={subscriberEmail}
        onChange={handleOnChange}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Subscribing..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default BlogSubscribeForm;
