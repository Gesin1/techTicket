import Image from "next/image";

const CardImage = () => {
  return (
    <div className=" bg-colorBackground-primary2 border border-colorBackground-primary rounded-3xl p-4 pb-16">
      <p className="mb-7 mt-2 text-colorBackground-foreground font-roboto text-[16px] ">
        Upload Profile Photo
      </p>
      <div className="bg-colorBackground-primary2 md:relative md:border md:border-colorBackground-primary rounded-2xl md:bg-colorBackground h-32 md:h-48 ">
        <div className="md:absolute -top-6 -bottom-8 md:left-1/2 md:transform border-2 md:-translate-x-1/2 bg-colorBackground-primary md:border-4 border-colorBackground-hover flex flex-col rounded-3xl items-center justify-center gap-y-4 py-12 px-4 md:max-w-[40%] max-w-[80%] mx-auto mt-4 ">
          <Image src="/icon.png" alt="download-icon" width={20} height={20} />
          <p className="text-colorBackground-foreground font-roboto text-[16px] max-w-[70%] text-center ">
            Drag & drop or click to upload
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
