import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBox() {
  return (
    <div className="flex items-center bg-[#ececec] focus-within:bg-[#333] text-gray-500 focus-within:text-[#bebebe] transition-all duration-[350ms] rounded-xl px-4 group absolute min-w-[500px] max-w-[750px] left-1/2 -translate-x-1/2">
      <MagnifyingGlassIcon className="w-[1.1rem] h-[1.1rem]" />
      <input
        className="font-[450] bg-inherit p-3 py-[0.6rem] outline-none placeholder-gray-500 w-full focus:placeholder-[#9c9c9c] focus:text-[#eee] text-[0.85rem]"
        placeholder="Search for hospitals, clinics, etc."
      />
    </div>
  );
}
