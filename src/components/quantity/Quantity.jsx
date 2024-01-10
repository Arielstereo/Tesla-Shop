"use client";

import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Quantity = ({ quantity, setQuantity }) => {
  const modifyQuantity = (value) => {
    if (quantity + value > 0 && quantity + value <= 5) {
      setQuantity(quantity + value);
    }
    return;
  };
  return (
    <div className="flex gap-4">
      <button>
        <GrSubtractCircle size={25} onClick={() => modifyQuantity(-1)} />
      </button>
      <span className="bg-slate-200 w-12 p-2 rounded-md flex items-center justify-center text-slate-800">
        {quantity}
      </span>
      <button>
        <IoIosAddCircleOutline size={32} onClick={() => modifyQuantity(+1)} />
      </button>
    </div>
  );
};

export default Quantity;
