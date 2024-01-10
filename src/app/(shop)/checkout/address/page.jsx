"use client";

import { Button, Input } from "@nextui-org/react";
import Title from "../../../../components/title/Title";
import { useFormik } from "formik";
import { useCartStore } from "../../../../store/cartStore";
import { useRouter } from 'next/navigation'


export default function AddressPage() {
  const router = useRouter()
  const setInfo = useCartStore((state) => state.setInfo);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      city: "",
      country: "",
      phone: "",
    },
    onSubmit: (values) => {
      setInfo(values);
    },
  });

  return (
    <div className="md:mx-48 mb-32">
      <Title title="PERSONAL INFORMATION" subtitle="DELIVERY ADDRESS" />
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8 my-4">
          <Input
            type="text"
            label="NAME"
            variant="bordered"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="text"
            label="SURNAME"
            variant="bordered"
            name="surname"
            onChange={handleChange}
          />
          <Input
            type="text"
            label="ADDRESS"
            variant="bordered"
            name="address"
            onChange={handleChange}
          />
          <Input
            type="text"
            label="CITY"
            variant="bordered"
            name="city"
            onChange={handleChange}
          />
          <Input
            type="text"
            label="COUNTRY"
            variant="bordered"
            name="country"
            onChange={handleChange}
          />
          <Input
            type="text"
            label="PHONE"
            variant="bordered"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          onClick={() => router.push("/checkout")}
          className="w-full md:w-72 mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200"
        >
          CONTINUE
        </Button>
      </form>
    </div>
  );
}
