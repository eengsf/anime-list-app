// karena mau memakai event2 yang ada di browser maka memakai client
"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
   const searchRef = useRef();
   const router = useRouter();

   function handleSeacrh(event) {
      const keyword = searchRef.current.value;

      if (!keyword || keyword.trim() === '') return

      if (event.key === "Enter" || event.type === "click") {
         event.preventDefault();
         router.push(`/search/${keyword}`);
      }
   }

   return (
      <div className="relative">
         <input
            placeholder="cari anime..."
            className="w-full p-2 rounded"
            ref={searchRef} //useRef gunanya nanti apapun yg diketikan di input ini yg ada ref nya maka nilainya akan masuk ke searchRef
            onKeyDown={handleSeacrh}
         />
         <button className="absolute top-2 end-2" onClick={handleSeacrh}>
            <MagnifyingGlass size={24} />
         </button>
      </div>
   );
}