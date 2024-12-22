
// import "../../styles/login.css";
import { FormValuesArtitcle ,article} from "./schemas/createArticleFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./InputForm";
import { Button } from "../ui/button";

const ArticleForm = () =>{
    const cloudName = 'dhyrv5g3w';
    const uploadPreset = 'ptwmh2mt';
    
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValuesArtitcle>({
        resolver: zodResolver(article),
    });

    const onSubmit: SubmitHandler<FormValuesArtitcle> = async (data) => {
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
                console.log(responseData);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to login");
            }
        } catch (error: any) {
            console.error("Error login: ", error);
        }
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="title" label="Title" control={control} type="text" error={errors.title?.message}/>
            <InputForm name="first_paragraph" label="First Paragraph" control={control} type="text" error={errors.first_paragraph?.message}/>
            <InputForm name="second_paragraph" label="Second Paragraph" control={control} type="text" error={errors.second_paragraph?.message}/>
            <InputForm name="third_paragraph" label="Third Paragraph" control={control} type="text" error={errors.third_paragraph?.message}/>
            <InputForm name="fourth_paragraph" label="Fourth Paragraph" control={control} type="text" error={errors.fourth_paragraph?.message}/>
            <InputForm name="fith_paragraph" label="Fith Paragraph" control={control} type="text" error={errors.fith_paragraph?.message}/>
            <Button className="submit">
                Create
            </Button>
        </form>
    )
}

export default ArticleForm