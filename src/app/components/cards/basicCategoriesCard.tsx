import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  labelText?: string;
}

export default function BasicCategoriesCard({ image, labelText }: CardProps) {
  return (
    <div className={`flex flex-col cursor-pointer min-h-32`}>
      {/* Top section with main color */}
      <div className={`flex justify-center items-center p-1 min-h-8/12`}>
        {image && (
          <Image
            src={image}
            alt={labelText ?? "Category"}
            // width={72}
            // height={72}
            className="size-36"
          />
        )}
      </div>
      <div
        className={`flex justify-center items-center text-base font-normal text-[#010101]  `}
      >
        {labelText && <span className="text-center">{labelText}</span>}
      </div>
    </div>
  );
}
