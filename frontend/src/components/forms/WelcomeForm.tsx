import Swal from 'sweetalert2';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { WelcomeFormValues,welcomeFormSchema } from './schemas/welcomeFormSchema';
import InputForm from './InputForm';
import { Button } from '../ui/button';


interface WelcomeFormProps {
    setAutoProceed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WelcomeForm = ({ setAutoProceed }:WelcomeFormProps) => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm<WelcomeFormValues>({
        resolver: zodResolver(welcomeFormSchema),
      });
    
    const onSubmit: SubmitHandler<WelcomeFormValues> = (data) => {
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}myapp/api/client/create`;

        Swal.fire({
            title: 'Confirm Email',
            text: 'Have you correctly entered your email address?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, continue',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(apiUrl, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({data})
                    });
                    if (response.ok) {
                        reset();                        
                        localStorage.setItem("verified_user", "true");
                        setAutoProceed(true); // Signal to parent component to proceed automatically
                    } else {
                        console.error("Failed to submit form.");
                    }
                } catch (error) {
                    console.error("Error submitting form:", error);
                }
            }
        });     
      };

return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex ">
                <InputForm
                    name="userName"
                    label="User Name"
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
            <Button type="submit">
                Continue
            </Button>
        </form>
    );
};