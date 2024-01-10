import { Button } from "@nextui-org/react";
import Link from "next/link";

const TeslaButton = ({ title, href, onClick }) => {
    return (
      <Button
        as={Link}
        href={href}
        className="w-full mt-4 bg-slate-700 text-slate-200 border-t-2 border-slate-100 rounded-none"
        onClick={onClick}
      >
        {title}
      </Button>
    );

};

export default TeslaButton;
