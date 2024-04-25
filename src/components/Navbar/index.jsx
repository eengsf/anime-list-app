import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
   return (
      <header className="bg-color-accent">
         <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
            <Link href="/" className="text-white font-bold text-xl">ANIME LIST</Link>
            <InputSearch />
         </div>
      </header>
   );
}