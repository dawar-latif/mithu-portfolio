import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  bgMain: string; // e.g., 'bg-green-400'
  bgLight: string; // e.g., 'bg-green-100'
  labelText?: string;
}

export default function CategoriesCard({
  image,
  bgMain,
  bgLight,
  labelText,
}: CardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden shadow-md w-full min-h-36 cursor-pointer`}
    >
      {/* Top section with main color */}
      <div
        className={`flex justify-center items-center p-4 ${bgMain} min-h-9/12`}
      >
        {image && (
          <Image
            src={image}
            alt={labelText ?? "Category icon"}
            width={48}
            height={48}
          />
        )}
      </div>
      {/* Bottom section with light color */}
      <div
        className={`flex justify-center items-center text-base font-normal text-[#010101] p-2 ${bgLight}`}
      >
        {labelText && <span className="text-center">{labelText}</span>}
      </div>
    </div>
  );
}
