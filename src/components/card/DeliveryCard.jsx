import { Button, Divider } from "@nextui-org/react";
import clsx from "clsx";

const DeliveryCard = ({
  order,
  info,
  cart,
  subtotal,
  shipping,
  isCheckout,
  handlePaid,
  handleOrder,
  isPaid,
}) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 w-full h-fit border-t-4 border-slate-600 dark:border-slate-100 mt-16 rounded-b-lg">
      {isCheckout ? (
        <div className="p-12 text-slate-800 dark:text-slate-200">
          <h2 className="text-xl">DELIVERY ADDRESS</h2>
          <div className="flex flex-col text-sm gap-1 mt-4">
            <span>
              {info?.name} {info?.surname}
            </span>
            <span>{info?.address}</span>
            <span>{info?.city}</span>
            <span>{info?.country}</span>
            <span>{info?.phone}</span>
          </div>
          <Divider className="bg-slate-400 my-8" />
          <div>
            <h2 className="text-xl text-slate-800 dark:text-slate-200 mb-8">ORDER SUMMARY</h2>
          </div>
          <div className="flex justify-between text-slate-800 dark:text-slate-200 py-1 text-sm">
            <h3>PRODUCTS</h3>
            <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between text-slate-800 dark:text-slate-200 py-1 text-sm">
            <h3>SHIPPING</h3>
            <span>u$s {shipping}</span>
          </div>
          <div className="flex justify-between text-slate-800 dark:text-slate-200 py-1 text-sm">
            <h3>SUBTOTAL</h3>
            <span>u$s {subtotal}</span>
          </div>
          <div className="flex justify-between mt-12">
            <h3>TOTAL</h3>
            <span>$ {subtotal + shipping}</span>
          </div>
          <Button
            onClick={handleOrder}
            className="w-full mt-4 bg-slate-700 text-slate-200 border-t-2 border-slate-100 rounded-none"
          >
            CHECKOUT
          </Button>
        </div>
      ) : (
        <div className="p-12">
          <h2 className="text-xl text-slate-800 dark:text-slate-200">DELIVERY ADDRESS</h2>
          <div className="flex flex-col text-sm text-slate-800 dark:text-slate-200 gap-1 mt-4">
            <span>
              {order?.info?.name} {" "}
              {order?.info?.surname}
            </span>
            <span>{order?.info?.address}</span>
            <span>{order?.info?.city}</span>
            <span>{order?.info?.country}</span>
            <span>{order?.info?.phone}</span>
          </div>
          <Divider className="bg-slate-400 my-8" />
          <div>
            <h2 className="text-xl mb-8 text-slate-800 dark:text-slate-200">ORDER SUMMARY</h2>
          </div>
          {order?.length > 0 && (
            <div className="flex justify-between text-slate-800 dark:text-slate-200 py-1 text-sm">
              <h3>PRODUCTS</h3>
              <span>
                {order?.cart?.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          )}
          <div className="flex justify-between text-slate-800 dark:text-slate-200 py-1 text-sm">
            <h3>SHIPPING</h3>
            <span>u$s {shipping}</span>
          </div>
          <div className="flex justify-between text-slate-800 dark:text-slate-200 py-1 text-sm">
            <h3>SUBTOTAL</h3>
            <span>u$s {subtotal}</span>
          </div>
          <div className="flex justify-between mt-12">
            <h3>TOTAL</h3>
            <span>$ {subtotal + shipping}</span>
          </div>
          <Button
            onClick={handlePaid}
            className={clsx(
              "w-full mt-8 border-t-2 border-slate-100 rounded-none bg-slate-700 text-slate-200",
              {
                hidden: isPaid,
              }
            )}
          >
            PAID WITH CREDIT CARD
          </Button>
        </div>
      )}
    </div>
  );
};

export default DeliveryCard;
