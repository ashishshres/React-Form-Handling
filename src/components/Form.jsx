import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmit }) {
    const { register, handleSubmit, reset } = useForm();
    const handleForm = (data) => {
        if (data.name && data.email && data.image) {
            handleFormSubmit(data);
            reset();
        }
    };
    return (
        <div className="p-4 flex justify-center">
            <form className="flex gap-2" onSubmit={handleSubmit(handleForm)}>
                <input
                    {...register("name")}
                    type="text"
                    className="rounded-md px-2 py-1 bg-zinc-800 text-white"
                    placeholder="name"
                    autocomplete="off"
                />
                <input
                    {...register("email")}
                    type="email"
                    className="rounded-md px-2 py-1 bg-zinc-800 text-white"
                    placeholder="email"
                    autocomplete="off"
                />
                <input
                    {...register("image")}
                    type="text"
                    className="rounded-md px-2 py-1 bg-zinc-800 text-white"
                    placeholder="image url"
                    autocomplete="off"
                />
                <input
                    type="submit"
                    value="Add User"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md cursor-pointer"
                />
            </form>
        </div>
    );
}

export default Form;
