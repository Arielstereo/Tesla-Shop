import { Spinner } from "@nextui-org/react";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner size="lg" color="default" />
    </div>
  );
}
