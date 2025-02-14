import { Button } from "../ui/button";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  style?: string;
};
const ButtonComponent = ({
  label,
  onClick,
  style = "bg-colorBackground-hover rounded-[4px] font-roboto text-[16px] font-normal hover:bg-colorBackground-hover ",
}: ButtonProps) => {
  return (
    <div>
      <Button className={style} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
