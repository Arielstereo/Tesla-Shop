import { Button, Divider } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";

const DeliveryCard = ({
  info,
  cart,
  subtotal,
  shipping,
  orderNumber,
  isLink,
  handlePaid,
  paid
}) => {
  return (
    <div className="bg-slate-900 w-full h-fit border-t-4 border-slate-100 mt-16 rounded-b-lg">
      <div className="p-12">
        <h2 className="text-xl">DELIVERY ADDRESS</h2>
        <div className="flex flex-col text-sm text-slate-400 gap-1 mt-4">
          <span>
            {info.name} {info.surname}
          </span>
          <span>{info.address}</span>
          <span>{info.city}</span>
          <span>{info.country}</span>
          <span>{info.phone}</span>
        </div>
        <Divider className="bg-slate-400 my-8" />
        <div>
          <h2 className="text-xl mb-8">ORDER SUMMARY</h2>
        </div>
        <div className="flex justify-between text-slate-400 py-1 text-sm">
          <h3>PRODUCTS</h3>
          <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </div>
        <div className="flex justify-between text-slate-400 py-1 text-sm">
          <h3>SHIPPING</h3>
          <span>u$s {shipping}</span>
        </div>
        <div className="flex justify-between text-slate-400 py-1 text-sm">
          <h3>SUBTOTAL</h3>
          <span>u$s {subtotal}</span>
        </div>
        <div className="flex justify-between mt-12">
          <h3>TOTAL</h3>
          <span>$ {subtotal + shipping}</span>
        </div>
        {isLink ? (
          <Button
            as={Link}
            href={`/orders/${orderNumber}`}
            className="w-full mt-4 bg-slate-700 text-slate-200 border-t-2 border-slate-100 rounded-none"
          >
            CHECKOUT
          </Button>
        ) : (
          <Button
            onClick={handlePaid}
            className={clsx(
              "w-full mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200",
              {
                hidden: paid,
              }
            )}
          >
            PAID WITH CREDIT CARD
          </Button>
        )}
      </div>
    </div>
  );
};

export default DeliveryCard;
