"use client";

import { Button } from "@nextui-org/react";
import Title from "../../../../components/title/Title";
import Link from "next/link";
import TeslaButton from "../../../../components/button/TeslaButton";
import { useSession, signOut } from "next-auth/react";

export default function EmptyCart() {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="mx-2 md:mx-48">
      <Title title="CART" />
      <div className="flex flex-col gap-8 mx-2 md:mx-48 text-slate-800 dark:text-slate-200">
        <h3>YOUR CART IS EMPTY.</h3>
        <div className="flex flex-col md:flex-row gap-8 mb-16 md:mb-32 w-2/3">
          <TeslaButton title="CONTINUE SHOPPING" href={"/"} />
          {!data ? (
            <Button
              as={Link}
              href={"/auth/signin"}
              className="w-full md:w-1/3 mt-4 bg-transparent border border-slate-50 rounded-none"
            >
              SIGNIN
            </Button>
          ) : (
            <Button
              onClick={() => {
                signOut();
              }}
              className="w-full md:w-1/3 mt-4 bg-transparent border-2 border-slate-600 dark:border-slate-50 rounded-none"
            >
              LOGOUT
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
