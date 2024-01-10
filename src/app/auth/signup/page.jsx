import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <div>
        <h2 className="text-3xl mb-8 text-slate-900">CREATE ACCOUNT</h2>
        <h3 className="text-sm text-slate-800 mb-4">USERNAME</h3>
        <Input type="text" className="w-72 border border-slate-400" color="default" size="sm" />
        <h3 className="text-sm text-slate-800 my-4">EMAIL ADDRESS</h3>
        <Input type="email" className="w-72 border border-slate-400" color="default" size="sm" />
      </div>

      <Button className="w-72 mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200">
        CONTINUE
      </Button>
    </div>
  );
}
