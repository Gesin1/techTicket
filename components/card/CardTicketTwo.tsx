import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";

const CardTicketTwo = () => {
  return (
    <div className="relative max-w-[90%] md:max-w-[50%] xl:max-w-[80%] mx-auto border-[1px] border-colorBackground-hover py-4 px-5 gradient mt-5">
      {/* <div className="absolute -top-[0px] -left-[9px] h-6 w-6 rounded-full border-r-[1px]  bg-colorBackground-card "></div> */}
      <Card className="border-[1px] border-colorBackground-hover rounded-2xl gradient2">
        <CardHeader className="">
          <CardDescription className="font-roadRage text-[48px] lg:text-[62px] text-center text-colorBackground-foreground pt-5">
            Techember Fest "25
          </CardDescription>
        </CardHeader>
        <CardContent className="font-roboto text-[14px] md:text-[16px] font-normal text-colorBackground-foreground text-center lg:max-w-[55%] mx-auto">
          <div className="mb-10">
            <p className="text-colorBackground-foreground font-roboto text-[10px] mb-2 md:mb-0">
              📍 04 Rumens road, Ikoyi, Lagos
            </p>
            <p className="text-colorBackground-foreground font-roboto text-[10px]">
              📅 March 15, 2025 | 7:00 PM
            </p>
          </div>
          <div className=" border-4 border-colorBackground-hover rounded-3xl max-w-[50%] md:max-w-[60%] mx-auto h-36 "></div>
          <div className="border border-colorBackground-secoundary rounded-2xl flex flex-col my-5 p-2">
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
              <p className="text-colorBackground-foreground font-roboto font-normal text-[10px] text-start">
                Nil ? Or the users sad story they write in there gets this whole
                space, Max of three rows
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardTicketTwo;
