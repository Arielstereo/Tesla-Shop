import Image from "next/image";

const OrderListCard = ({ cart, removeItem, isCheckout }) => {
  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.product.slug}
          className="mt-12 flex flex-col md:flex-row gap-4"
        >
          <Image
            src={`/products/${item.product.images[0]}`}
            alt="image"
            width={100}
            height={100}
            className="object-cover"
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between gap-8">
              <span>{item.product.title}</span>
              <span>${item.product.price}</span>
            </div>
            <div>
              <span className="text-slate-400">SIZE: {item.size}</span>
            </div>
            <div className="flex gap-12">
              <span className="text-slate-400">QUANTITY: {item.quantity}</span>
              {isCheckout ? (
                ""
              ) : (
                <button
                  onClick={() => removeItem(item.product.slug)}
                  className="text-slate-500 text-sm underline"
                >
                  REMOVE
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderListCard;
