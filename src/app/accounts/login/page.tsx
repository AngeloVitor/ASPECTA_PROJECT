"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/schemas/loginSchema";
import { loginSchemaType } from "@/app/@types/loginSchemaType";
import Link from "next/link";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginSchemaType) => {
    console.log(data);
  };

  return (
    <div className="container mt-4">
      <h1 className="m-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          aria-invalid={errors.email ? true : false}
          {...register("email")}
        />
        {errors.email && (
          <small id="valid-helper">{errors.email.message}</small>
        )}

        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          aria-invalid={errors.email ? true : false}
          {...register("password")}
        />
        {errors.password && (
          <small id="valid-helper">{errors.password?.message}</small>
        )}
        <label>
          <input type="checkbox" role="switch" {...register("remember")} />
          Remember me
        </label>
        <input className="mt-4" type="submit" value="Submit" />
      </form>

      {/* Adicione um link para o registro */}
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/accounts/register">Register</Link>
      </p>
    </div>
  );
};

export default Page;
