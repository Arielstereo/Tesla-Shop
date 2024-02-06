"use client";

import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

export default function Signup() {
  const router = useRouter();
  const [axiosError, setAxiosError] = useState('')

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().required("Email is required").email(),
      password: Yup.string()
        .required("Password is required")
        .min(6, "must be at least 6 characters!"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "/api/auth/signup",
          values
        );
        console.log(res);
        if (res) return router.push("/auth/signin");
      } catch (error) {
        setAxiosError(error.response.data.message);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl mb-8 text-slate-900">CREATE ACCOUNT</h2>
        <div>
          <h3 className="text-sm text-slate-800 mb-4">USERNAME</h3>
          <Input
            onChange={handleChange}
            type="text"
            name="username"
            className="w-72 border border-slate-400"
            color="default"
            size="sm"
          />
          <span className="text-red-600 text-sm">{errors.username}</span>
          <h3 className="text-sm text-slate-800 my-4">EMAIL ADDRESS</h3>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            className="w-72 border border-slate-400"
            color="default"
            size="sm"
          />
          <span className="text-red-600 text-sm">{errors.email}</span>
          <h3 className="text-sm text-slate-800 my-4">PASSWORD</h3>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            className="w-72 border border-slate-400"
            color="default"
            size="sm"
          />
          <span className="text-red-600 text-sm">{errors.password}</span>
        </div>
        <Button
          type="submit"
          className="w-72 mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200"
        >
          CONTINUE
        </Button>
      </form>
      {
        axiosError && (
          <span className="text-red-600 text-sm mt-4">{axiosError}</span>
        )
      }
    </div>
  );
}
