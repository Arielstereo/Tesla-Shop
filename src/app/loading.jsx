import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-800">
      <Spinner size="lg" color="success" />
    </div>
  );
}
