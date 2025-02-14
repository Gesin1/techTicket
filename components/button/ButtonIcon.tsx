import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from "../ui/button";

const ButtonIcon = () => {
  return (
    <Button
      size="icon"
      asChild
      className=" px-16 bg-colorBackground-foreground hover:bg-colorBackground-foreground"
    >
      <Link href="/" className="flex items-center  ">
        <p className="text-sm font-normal uppercase text-colorBackground ">
          MY TICKETS
        </p>
        <HiArrowLongRight className="text-colorBackground" />
      </Link>
    </Button>
  );
};

export default ButtonIcon;
