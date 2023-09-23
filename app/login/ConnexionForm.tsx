"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const ConnexionForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("cool");
  };

  return (
    <form className="h-[80vh] flex flex-col justify-center gap-5 items-center w-full">
      <h1 className="text-3xl mb-5">Enter your credential</h1>

      <Input
        id="username"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Button onClick={handleSubmit(onSubmit)}>Connexion</Button>
    </form>
  );
};
export default ConnexionForm;
