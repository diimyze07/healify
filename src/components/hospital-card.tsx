import Image from "next/image";
import Link from "next/link";

import { StarIcon } from "@heroicons/react/24/solid";

import { datUriSolidGray } from "@/lib/dataUri/solid-gray";

interface HospitalCardDetails {
  name: string;
  rating: number;
  imageSrc: string;
  distance: number | undefined;
}

export default function HospitalCard({
  name,
  rating,
  imageSrc,
  distance,
}: HospitalCardDetails): React.ReactNode {
  return (
    <Link href="/">
      <div className="group cursor-pointer transition-all duration-200">
        <div className="mb-[0.7rem] w-full relative flex flex-col justify-end aspect-[10/5.5] overflow-hidden rounded-lg transition-all hover:brightness-[0.8] duration-[400ms]">
          <Image
            className="object-cover saturate-[1.1] contrast-[1.05]"
            src={imageSrc}
            alt="hospital-image"
            fill
            placeholder={datUriSolidGray}
          />
        </div>
        <div>
          <div className="flex justify-between select-none mb-[0.25rem] text-[1.05rem]">
            <h2 className="font-medium">
              {name.length > 20 ? `${name.slice(0, 20)} ...` : name}
            </h2>
            <div className="flex items-center gap-[0.2rem]">
              <StarIcon className="h-[0.8em] w-[0.8em]" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <p className="text-[0.8rem]">
              {distance ? `${distance} km` : "Calculating ..."}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
