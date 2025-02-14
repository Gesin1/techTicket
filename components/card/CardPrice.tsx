import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const CardPrice = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  const priceInfo = [
    { price: "Free", access: "Regular Access" },
    { price: "$150", access: "VIP Access" },
    { price: "$150", access: "VVIP Access" },
  ];

  const buttonStyles =
    "border-[1px] border-colorBackground-hover flex flex-col justify-start items-start p-3 mt-5 rounded-2xl transition-all duration-300";

  return (
    <Card className="border border-colorBackground-primary rounded-2xl bg-colorBackground-primary2 w-full ">
      <CardContent>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          {priceInfo.map((item, index) => {
            return (
              <button
                key={index}
                className={`${buttonStyles} ${
                  activeButton === index
                    ? "bg-colorBackground-primary"
                    : "bg-transparent"
                }`}
                onClick={() => handleClick(index)}
              >
                <h1 className="text-[24px] font-roboto font-semibold capitalize text-colorBackground-foreground mb-2">
                  {item.price}
                </h1>
                <p className="text-[16px] font-roboto font-normal uppercase text-colorBackground-foreground text-start">
                  {item.access}
                </p>
                <p className="text-[14px] font-roboto font-normal capitalize text-colorBackground-foreground text-start">
                  20/25
                </p>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPrice;
