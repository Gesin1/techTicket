import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const CardHero = () => {
  return (
    <Card className="border border-colorBackground-primary rounded-2xl bg-gradient-to-tl from-colorBackground from 100% to-colorBackground-primary to-80%">
      <CardHeader className="">
        <CardDescription className="font-roadRage text-[48px] lg:text-[62px] text-center text-colorBackground-foreground pt-5">
          Techember Fest 25
        </CardDescription>
      </CardHeader>
      <CardContent className="font-roboto text-[14px] md:text-[16px] font-normal text-colorBackground-foreground text-center lg:max-w-[55%] mx-auto">
        <p>
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row items-center justify-between mx-auto md:max-w-[60%] mb-5">
        <p className="text-colorBackground-foreground font-roboto text-[16px] mb-2 md:mb-0">
          📍 [Event Location]
        </p>
        <p className="hidden md:block text-colorBackground-foreground font-roboto text-[16px]">
          | |
        </p>
        <p className="text-colorBackground-foreground font-roboto text-[16px]">
          {" "}
          March 15, 2025 | 7:00 PM
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardHero;
