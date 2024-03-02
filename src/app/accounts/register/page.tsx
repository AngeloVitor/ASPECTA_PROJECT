"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/app/schemas/registerSchema";
import { registerSchemaType } from "@/app/@types/registerSchema";
import Link from "next/link";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: registerSchemaType) => {
    console.log(data);
  };

  return (
    <div className="container mt-4">
      <h1 className="m-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          aria-label="Username"
          aria-invalid={errors.username ? "true" : "false"}
          {...register("username")}
        />
        {errors.username && (
          <small id="valid-helper">{errors.username.message}</small>
        )}

        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email")}
        />
        {errors.email && (
          <small id="valid-helper">{errors.email.message}</small>
        )}

        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password")}
        />
        {errors.password && (
          <small id="valid-helper">{errors.password.message}</small>
        )}
        <input type="submit" value="Submit" />
      </form>
      <p>
        Do&apos;you have an account? <Link href="/accounts/login">Login</Link>
      </p>
    </div>
  );
};

export default Page;
