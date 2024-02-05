"use client";

import { useSession, signOut } from "next-auth/react";
import Title from "../../../components/title/Title";
import TeslaButton from "../../../components/button/TeslaButton";
import { Button } from "@nextui-org/react";

export default function Dashboard() {
  const { data, status } = useSession();

  console.log(data, status);

  return (
    <div className="md:mx-48">
      <Title title="DASHBOARD" />
      <div className="flex flex-col gap-16 items-center justify-center">
        <p className="text-center text-slate-800 dark:text-slate-200">
          {data.user.username} | {data.user.email}
        </p>
        <div className="flex flex-col md:flex-row md:w-1/2 gap:2 md:gap-8">
            <Button
              onClick={() => {
                signOut();
              }}
              className="w-full md:w-1/3 mt-4 bg-transparent text-slate-800 dark:text-slate-200 border-2 border-slate-600 dark:border-slate-50 rounded-none"
            >
              LOGOUT
            </Button>
          <TeslaButton title="CONTINUE SHOPPING" href={"/"} />
        </div>
      </div>
    </div>
  );
}
