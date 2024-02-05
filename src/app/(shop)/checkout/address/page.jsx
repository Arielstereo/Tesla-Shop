"use client";

import { Button, Input } from "@nextui-org/react";
import Title from "../../../../components/title/Title";
import { useFormik } from "formik";
import { useCartStore } from "../../../../store/cartStore";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import clsx from "clsx";

export default function AddressPage() {
  const router = useRouter();
  const setInfo = useCartStore((state) => state.setInfo);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      city: "",
      country: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      phone: Yup.number().typeError("the phone must contain only numbers").required("Phone is requered"),
    }),

    onSubmit: (values) => {
      setInfo(values);
    },
  });

  return (
    <div className="md:mx-48 mb-32">
      <Title title="PERSONAL INFORMATION" subtitle="DELIVERY ADDRESS" />
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8 my-4">
          <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
            <Input
              type="text"
              label="NAME"
              variant="bordered"
              name="name"
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-400">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
            <Input
              type="text"
              label="SURNAME"
              variant="bordered"
              name="surname"
              onChange={handleChange}
            />
            {errors.surname && <span className="text-red-400">{errors.surname}</span>}
          </div>
          <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
            <Input
              type="text"
              label="ADDRESS"
              variant="bordered"
              name="address"
              onChange={handleChange}
            />
            {errors.address && <span className="text-red-400">{errors.address}</span>}
          </div>
          <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
            <Input
              type="text"
              label="CITY"
              variant="bordered"
              name="city"
              onChange={handleChange}
            />
            {errors.city && <span className="text-red-400">{errors.city}</span>}
          </div>
          <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
            <Input
              type="text"
              label="COUNTRY"
              variant="bordered"
              name="country"
              onChange={handleChange}
            />
            {errors.country && <span className="text-red-400">{errors.country}</span>}
          </div>
          <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
            <Input
              type="text"
              label="PHONE"
              variant="bordered"
              name="phone"
              onChange={handleChange}
            />
            {errors.phone && <span className="text-red-400">{errors.phone}</span>}
          </div>
        </div>
        <Button
          type="submit"
          onClick={() => router.push("/checkout")}
          className= {
            clsx("w-full md:w-72 mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200 cursor-pointer",
            {
              "hidden" : errors.name || errors.surname || errors.city || errors.address || errors.phone || errors.country || values.name === '' || values.surname === '' || values.city === '' || values.address === '' || values.phone === '' || values.country === ''
            })
          }
        >
          CONTINUE
        </Button>
      </form>
    </div>
  );
}
