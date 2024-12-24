import InputForm from "./InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { userExistenceSchema,FormValuesUserExistence } from "./schemas/checkUserExistenceForm";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";


export const CheckUserExistenceForm = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValuesUserExistence>({
    resolver: zodResolver(userExistenceSchema),
  });


  const onSubmit: SubmitHandler<FormValuesUserExistence> = async (data) => {
    console.log(data);

    navigate("/booking/")
    reset()
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
      <Button className="w-full" type="submit">Submit</Button>
      <p className="text-center text-gray-400 text-sm">&copy; 2017-2024</p>
  </form>
  );
};
