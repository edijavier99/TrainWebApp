import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { WelcomeFormValues, welcomeFormSchema } from './schemas/welcomeFormSchema';
import InputForm from './InputForm';
import { Button } from '../ui/button';
import { useNavigate } from "react-router-dom";



export const WelcomeForm = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<WelcomeFormValues>({
    resolver: zodResolver(welcomeFormSchema),
  });

  const onSubmit: SubmitHandler<WelcomeFormValues> = (data) => {
    console.log(data);
    reset();
    navigate("/calendar/")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <InputForm
          name="userName"
          label="Name"
          control={control}
          type="text"
          error={errors.userName?.message}
        />
        <InputForm
          name="userSurname"
          label="Surname"
          control={control}
          type="text"
          error={errors.userSurname?.message}
        />
        <InputForm
          name="userEmail"
          label="Email Address"
          control={control}
          type="email"
          error={errors.userEmail?.message}
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
        <Button type="submit" className="w-full sm:w-auto">
          Continue
        </Button>
      </div>
    </form>
  );
};
