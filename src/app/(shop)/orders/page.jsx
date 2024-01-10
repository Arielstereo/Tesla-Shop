"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import Title from "../../../components/title/Title";
import { useCartStore } from "../../../store/cartStore";

export default function Orders() {
  const orders = useCartStore((state) => state.order)

  return (
    <div className="mx-48 h-screen">
      <Title title="Orders" />
      <Table>
        <TableHeader>
          <TableColumn className="bg-slate-600 text-slate-50">
            ORDER
          </TableColumn>
          <TableColumn className="bg-slate-600 text-slate-50">NAME</TableColumn>
          <TableColumn className="bg-slate-600 text-slate-50">
            TOTAL
          </TableColumn>
          <TableColumn className="bg-slate-600 text-slate-50">
            STATUS
          </TableColumn>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow className="bg-slate-800" key={order.id}>
              <TableCell># {order.id}</TableCell>
              <TableCell>
                <Popover placement="right">
                  <PopoverTrigger>
                    <Button>
                      {order.info.name} {order.info.surname}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-slate-600">
                    <div className="px-1 py-2">
                      <div className="text-tiny">Address: {order.info.address}</div>
                      <div className="text-tiny">Country: {order.info.country}</div>
                      <div className="text-tiny">phone: {order.info.phone}</div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>
              <Popover placement="left">
                  <PopoverTrigger>
                    <Button>
                    $ {order.total}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-slate-600">
                    <div className="px-1 py-2">
                    {
                      order.cart.map(product => (
                        <div className="text-tiny" key={product.id}>
                        {product.product.title} (X {product.quantity})
                        </div>
                        ))
                    }
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>
                <Chip color="success">PAID</Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
