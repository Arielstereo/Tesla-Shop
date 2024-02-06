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
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Orders() {

  const [orders, setOrders] = useState([])
  const { data } = useSession();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("/api/orders");
      console.log(res.data.data);
      setOrders(res.data.data);
    };
    fetchOrders();
  }, []);

  return (
  
      <>
      {
        data?.user?.isAdmin ? (
          <div className="md:mx-48 h-screen">
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
              {orders?.map((order) => (
                <TableRow className="bg-slate-800" key={order.id}>
                  <TableCell>
                    <Link href={`/orders/${order._id}`}># {order.id}</Link>
                  </TableCell>
                  <TableCell>
                    <Popover placement="right">
                      <PopoverTrigger>
                        <Button>
                          {order.info.name} {" "}
                          {order.info.surname}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="bg-slate-600">
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                            Address: {order.info.address}
                          </div>
                          <div className="text-tiny">
                            Country: {order.info.country}
                          </div>
                          <div className="text-tiny">phone: {order.info.phone}</div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell>
                    <Popover placement="left">
                      <PopoverTrigger>
                        <Button>$ {order.total}</Button>
                      </PopoverTrigger>
                      <PopoverContent className="bg-slate-600">
                        <div className="px-1 py-2">
                          {orders && orders[0].cart.map((item) => (
                            <div className="text-tiny" key={item._id}>
                              {item.product.title} (X {item.quantity})
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell>
                    <Chip color={order.isPaid === true ? "success" : "danger"}>
                      {order.isPaid === true ? "paid" : "pending"}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        ) : redirect("/")
      }
      </>
  );
}
