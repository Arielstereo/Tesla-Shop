import { Button } from "@nextui-org/react";
import Title from "../../../../components/title/Title";
import Link from "next/link";
import TeslaButton from "../../../../components/button/TeslaButton";

export default function EmptyCart() {
  return (
    <div className="mx-2 md:mx-48">
      <Title title="CART" />
      <div className="flex flex-col gap-8 mx-2 md:mx-48">
        <h3 className="text-slate-400">YOUR CART IS EMPTY.</h3>
        <div className="flex flex-col md:flex-row gap-8 mb-16 md:mb-32 w-2/3">
          <TeslaButton title="CONTINUE SHOPPING" href={"/"} />
          <Button
            as={Link}
            href={"/auth/signin"}
            className="w-full md:w-1/3 mt-4 bg-transparent text-slate-200 border border-slate-50 rounded-none"
          >
            SIGNIN
          </Button>
        </div>
      </div>
    </div>
  );
}
