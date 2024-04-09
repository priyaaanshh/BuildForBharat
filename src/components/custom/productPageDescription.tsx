import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ProductPageDescription = () => {
  const description = `
  Experience the iPhone 15 – your dynamic companion. Dynamic Island
  ensures you stay connected, bubbling up alerts seamlessly while you're
  busy. Its durable design features infused glass and aerospace-grade
  aluminum, making it dependable and resistant to water and dust.
  Capture life with precision using the 48 MP Main Camera, perfect for
  any shot. Powered by the A16 Bionic Processor, it excels in
  computational photography and more, all while conserving battery life.
  Plus, it's USB-C compatible, simplifying your charging needs. Elevate
  your tech game with the iPhone 15 – innovation at your fingertips.
  Goodbye cable clutter, hello convenience.`;
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-col justify-between items-start space-y-2">
          <CardTitle>Apple iPhone 15 (Black, 128 GB)</CardTitle>
          <CardDescription className="text-primary font-semibold italic">
            Apple
          </CardDescription>
        </div>
        <div className="flex flex-col justify-between items-start space-y-2">
          <CardTitle className="text-right">₹72,999</CardTitle>
          <CardDescription className=" text-right w-full">
            <s>₹79,900</s>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="whitespace-pre-line">{description}</div>
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-between">
        <div className="font-semibold text-lg my-3">Specifications</div>
        <Table>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardFooter>
    </Card>
  );
};

export default ProductPageDescription;
