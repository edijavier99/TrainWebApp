import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, FormValuesLogin } from "./schemas/loginFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./InputForm";
import { Button } from "../ui/button";

export const AdminLoginForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValuesLogin>({
        resolver: zodResolver(login),
    });

    const [errMessage, setErrorMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValuesLogin> = async (data) => {
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}api/login`;

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                reset();
                localStorage.setItem("refreshToken", responseData.tokens.refresh);
                localStorage.setItem("access_token", responseData.tokens.access);

                if (responseData.tokens.access) {
                    navigate("/administrator"); // Navegar a la página principal después del login exitoso
                }
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to login");
            }
        } catch (error: any) {
            console.error("Error login: ", error);
            setErrorMessage(error.message || "An unexpected error occurred"); // Establecer un mensaje de error genérico si no hay mensaje específico
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    name="user_email"
                    label="Email"
                    control={control}
                    type="email"
                    error={errors.user_email?.message}
                />
                <InputForm
                    name="user_password"
                    label="Password"
                    control={control}
                    type="password"
                    error={errors.user_password?.message}
                />

                <Button type="submit">Submit</Button>

                <div className={`alert alert-danger ${errMessage ? "d-block" : "d-none"}`} role="alert">
                    {errMessage}
                </div>
            </form>
        </>
    );
};
