import Image from "next/image";
import ButtonIcon from "../button/ButtonIcon";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-2 md:px-2 py-4 md:py-4 border border-colorBackground-primary mx-10 my-5 rounded-2xl">
      <div>
        <Link href={"/"}>
          <Image
            src="/loggo.png"
            alt="logo"
            height={100}
            width={100}
            className="w-auto h-auto"
          />
        </Link>
      </div>
      <ul className="hidden md:flex flex-row items-center gap-x-10">
        <li className="text-colorBackground-text hover:text-colorBackground-foreground capitalize">
          Events
        </li>
        <li className="text-colorBackground-text hover:text-colorBackground-foreground capitalize">
          My Tickets
        </li>
        <li className="text-colorBackground-text hover:text-colorBackground-foreground capitalize">
          About Project
        </li>
      </ul>
      <ButtonIcon />
    </nav>
  );
};

export default Navbar;
