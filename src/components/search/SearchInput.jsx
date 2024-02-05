import { Input } from "@nextui-org/react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = ({setValue}) => {

  return (

    <div>
      <Input
        onChange={(e)=> setValue(e.target.value)}
        type="text"
        labelPlacement="outside"
        startContent={
          <IoSearchOutline className="text-2xl text-slate-800 dark:text-slate-200 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
};

export default SearchInput;
