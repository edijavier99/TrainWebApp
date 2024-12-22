import  { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./InputForm";
import { Button } from "../ui/button";
import { WeightRecordValues,weightRecordSchema } from "./schemas/addWeightSchema";

interface Props {
    client_id: number
}

const AddWeightRecord = ({ client_id }:Props) => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm<WeightRecordValues>({
        resolver: zodResolver(weightRecordSchema),
      });
    

    const [message, setMessage] = useState("");

    const onSubmit: SubmitHandler<WeightRecordValues> = async (data) => {
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}myapp/api/create-weight-graphic/${client_id}/`;
    
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    value:data
                }),
            });
    
            if (response.ok) {
                await response.json();
                setMessage("Successfully created new record");
                reset();
            } else {
                throw new Error("Failed to create record"); // Forzar un error para mostrar el mensaje de error
            }
        } catch (error) {
            console.error("Error creating new record: ", error);
        }
    };
    

    return (
        <>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="weightValue"
          label="Add New Weight"
          control={control}
          type="text"
          error={errors.weightValue?.message}
        />

        <Button  type="submit">
          Submit
        </Button>

        <div
          className={`alert alert-success ${message ? "d-block" : "d-none"}`}
          role="alert"
        >
          {message}
        </div>
      </form>
    </>
  );
};

export default AddWeightRecord;
