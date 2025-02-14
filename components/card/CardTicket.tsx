"use client";
import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

import Image from "next/image";
import { Separator } from "../ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

const CardTicket = ({ value = "123456789" }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: "CODE128",
        displayValue: true, // Set to true if you want numbers below the barcode
        textAlign: "center",
        lineColor: "#004AAD",
        width: 2,
        height: 60,
        margin: 10,
      });
    }
  }, [value]);

  return (
    <div className=" max-w-[450px] mx-auto relative">
      <Image
        src="/ticket.svg"
        alt="ticket-logo"
        width={400}
        height={400}
        className="mx-auto "
        priority
      />
      <Card className="absolute md:top-8 top-8 left-1/2 transform -translate-x-1/2 w-[80%]  border-[1px] border-colorBackground-hover rounded-2xl gradient2">
        <CardHeader className="">
          <CardDescription className="font-roadRage text-[34px]  text-center text-colorBackground-foreground pt-5 md:pt-10">
            Techember Fest "25
          </CardDescription>
        </CardHeader>
        <CardContent className="font-roboto text-[14px] md:text-[16px] font-normal text-colorBackground-foreground text-center lg:max-w-[90%] mx-auto px-3">
          <div className="md:mb-10 mb-5">
            <p className="text-colorBackground-foreground font-roboto text-[10px] mb-2 md:mb-0">
              📍 04 Rumens road, Ikoyi, Lagos
            </p>
            <p className="text-colorBackground-foreground font-roboto text-[10px]">
              📅 March 15, 2025 | 7:00 PM
            </p>
          </div>
          <div className=" border-4 border-colorBackground-hover rounded-2xl max-w-[50%] md:max-w-[60%] mx-auto h-16 md:h-36 md:mb-10 "></div>
          <div className="border border-colorBackground-secoundary rounded-2xl flex flex-col md:mt-5 md:mb-10 my-3 p-2">
            <div className="flex justify-between ">
              <div className="flex flex-col justify-start items-start gap-y-2 pb-1">
                <p className="text-colorBackground-text font-roboto text-[10px]">
                  Enter your name
                </p>
                <p className="text-colorBackground-foreground font-roboto font-bold text-[12px]">
                  Avi Chukwu
                </p>
              </div>
              <Separator
                orientation="vertical"
                className="bg-colorBackground-secoundary h-12"
              />
              <div className="flex flex-col justify-start items-start  gap-y-2 pb-1 ">
                <p className="text-colorBackground-text font-roboto text-[10px]">
                  Enter your email*
                </p>
                <p className="text-colorBackground-foreground font-roboto font-bold text-[12px]">
                  User@email.com
                </p>
              </div>
            </div>
            <Separator className="bg-colorBackground-secoundary " />
            <div className="flex justify-between  ">
              <div className="flex flex-col justify-start items-start  gap-y-2 pb-1 pt-1">
                <p className="text-colorBackground-text font-roboto text-[10px] w-[76px] text-start">
                  Ticket Type
                </p>
                <p className="text-colorBackground-foreground font-roboto font-bold text-[12px] uppercase">
                  VIP
                </p>
              </div>
              <Separator
                orientation="vertical"
                className="bg-colorBackground-secoundary h-12"
              />
              <div className="flex flex-col justify-start items-start  gap-y-2 pb-1 w-[95px] pt-1">
                <p className="text-colorBackground-text font-roboto text-[10px]">
                  Ticket for:
                </p>
                <p className="text-colorBackground-foreground font-roboto font-bold text-[12px] ">
                  1
                </p>
              </div>
            </div>
            <Separator className="bg-colorBackground-secoundary " />
            <div className="flex flex-col justify-start items-start  gap-y-2 pb-1 mt-2">
              <p className="text-colorBackground-text font-roboto text-[10px]">
                Special request?
              </p>
              <p className="text-colorBackground-foreground font-roboto font-normal text-[10px] text-start max-w-[300px]">
                Nil ? Or the users sad story they write in there gets this whole
                space, Max of three rows
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2  w-full flex justify-center">
        <svg ref={barcodeRef} className="w-[80%]"></svg>
      </div>
    </div>
  );
};

export default CardTicket;
