import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePostAxiosRequest } from "@/hooks/usePostAxiosRequest";
import { toast } from "sonner"

// Definir el tipo para la respuesta de la API y la solicitud
interface SubscriberData {
  subscriber_email: string;
}

const BlogSubscribeForm = () => {
  const [subscriberEmail, setSubscriberEmail] = useState<string>("");
  const [{ loading, error, data }, postData] = usePostAxiosRequest<
    SubscriberData,
    { subscriber_email: string }
  >(`${import.meta.env.VITE_BACKEND_URL}api/susbcribers/`);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscriberEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!subscriberEmail) {
      toast.error("Error", {
        description: "Please provide a valid email address.",
        className:"bg-red-500 border-0"
      })
      return;
    }

    const dataToPost = { subscriber_email: subscriberEmail };
    postData(dataToPost); // Realiza la solicitud POST
  };

  // Manejo de los efectos secundarios cuando cambia el estado de la respuesta (data o error)
  useEffect(() => {
    if (data) {
      toast.success("Success", {
        description: "You are now subscribed to our blog!",
      })
      setSubscriberEmail(""); // Limpiar el campo después de la suscripción exitosa
    }

    if (error) {
      toast.error("Error", {
        description: error.subscriber_email,
        className:"bg-red-500 border-0"
      })
    }
  }, [data, error, toast]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
    >
      <label className="hidden" htmlFor="subscriberEmail">
        Subscriber Email
      </label>
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
