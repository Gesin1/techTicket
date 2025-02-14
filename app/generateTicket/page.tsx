"use client";

import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { useState } from "react";
import ProgressBar from "@/app/actions/progressbar";
import CardHero from "@/components/card/CardHero";
import { Separator } from "@/components/ui/separator";
import CardPrice from "@/components/card/CardPrice";
import { Input } from "@/components/ui/input";
import CardImage from "@/components/card/CardImage";
import { Textarea } from "@/components/ui/textarea";
import CardTicket from "@/components/card/CardTicket";

const GenerateTicket = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="mb-16">
      <Navbar />
      <div className="max-w-[90%] lg:max-w-[50%] mx-auto p-5 border border-colorBackground-card rounded-2xl mt-10">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        {/* Your form content */}
        <div className="mt-8">
          {currentStep === 1 && (
            <div>
              <CardHero />
              <Separator className="bg-colorBackground-primary my-10 p-[3px] rounded-full" />
              <div className="flex flex-col justify-start items-start">
                <p className="font-roboto text-colorBackground-foreground text-[16px] font-normal capitalize mb-3">
                  Select Ticket Type:
                </p>
                <CardPrice />
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="font-roboto text-colorBackground-foreground text-[16px] font-normal capitalize mb-2 mt-5">
                  Number of Tickets
                </p>
                <Input
                  type="number"
                  placeholder="1"
                  className="border-[1px] border-colorBackground-primary text-colorBackground-foreground ring-colorBackground-primary  "
                />
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <CardImage />
              <Separator className="bg-colorBackground-primary my-10 p-[3px] rounded-full" />
              <div className="flex flex-col justify-start gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <p className="font-roboto text-colorBackground-foreground text-[16px] font-normal capitalize ">
                    Enter your name
                  </p>
                  <Input
                    type="text"
                    placeholder="1"
                    className="border-[1px] border-colorBackground-primary text-colorBackground-foreground ring-colorBackground-primary  "
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-roboto text-colorBackground-foreground text-[16px] font-normal capitalize ">
                    Enter your email
                  </p>
                  <Input
                    type="email"
                    placeholder="hello@avioflagos.io"
                    className="border-[1px] border-colorBackground-primary text-colorBackground-foreground ring-colorBackground-primary  "
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-roboto text-colorBackground-foreground text-[16px] font-normal capitalize  ">
                    Special request?
                  </p>
                  <Textarea
                    placeholder="Textarea"
                    className="border-[1px] border-colorBackground-primary text-colorBackground-foreground ring-colorBackground-primary  "
                  />
                </div>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <h1 className="font-Alatsi text-colorBackground-foreground text-[32px] font-normal capitalize ext-center">
                  Your Ticket is Booked!
                </h1>
                <p className="font-roboto text-colorBackground-foreground text-[16px] font-normal">
                  Check your email for a copy or you can download
                </p>
              </div>
              <CardTicket />
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-between gap-y-2 lex flex-col-reverse md:flex-row ">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            className=" p-2 rounded-md bg-colorBackground-primary font-roboto text-[16px] text-colorBackground-secoundary font-normal border-[1px] border-colorBackground-hover"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
            }
            className="p-2 rounded-md bg-colorBackground-hover font-roboto text-[16px] text-colorBackground-foreground font-normal border-[1px] border-colorBackground-primary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateTicket;
