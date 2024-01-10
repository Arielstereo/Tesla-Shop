import { Button, Input } from "@nextui-org/react";
import TeslaButton from "../../../components/button/TeslaButton";


export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <div>
        <h2 className="text-3xl mb-8 text-slate-900">SIGNIN</h2>
        <h3 className="text-sm text-slate-800 mb-4">EMAIL ADDRESS</h3>
        <Input
          type="email"
          className="w-72 border border-slate-400"
          color="default"
          size="sm"
        />
      </div>
      <Button className="w-72 mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200">
        CONTINUE
      </Button>
      <span className="text-slate-800 my-8">OR</span>
      <div className="w-72">
      <TeslaButton title={"CREATE ACCOUNT"} href={"/auth/signup"} />
      </div>
    </div>
  );
}
