"use client";

import { Button, Input } from "@nextui-org/react";
import TeslaButton from "../../../components/button/TeslaButton";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { signIn } from "next-auth/react";

export default function Signin() {
  const router = useRouter();
  const [axiosError, setAxiosError] = useState("");

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email(),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters!"),
    }),
    onSubmit: async () => {
      try {
        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        console.log(res);
        if (res.ok) return router.push("/dashboard");
        setAxiosError(res.error);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center pt-8"
    >
      <h2 className="text-3xl mb-8 text-slate-900">SIGNIN</h2>
      <div>
        <h3 className="text-sm text-slate-800 mb-4">EMAIL ADDRESS</h3>
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          className="w-96 border border-slate-400"
          color="default"
          size="sm"
        />
        <span className="text-red-600 text-sm">{errors.email}</span>
        <h3 className="text-sm text-slate-800 my-4">PASSWORD</h3>
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          className="w-96 border border-slate-400"
          color="default"
          size="sm"
        />
        <span className="text-red-600 text-sm">{errors.password}</span>
      </div>
      <Button
        type="submit"
        className="w-96 mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200"
      >
        CONTINUE
      </Button>
      {axiosError && (
        <span className="text-red-600 text-sm mt-4">{axiosError}</span>
      )}
      <span className="text-slate-800 my-8">OR</span>
      <div className="w-96">
        <TeslaButton title={"CREATE ACCOUNT"} href={"/auth/signup"} />
      </div>
    </form>
  );
}
