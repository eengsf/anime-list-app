"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";
// import getAnimeResponse from "@/libs/api-libs";


export default function Page() {
   const [page, setPage] = useState(1);
   const [topAnime, setTopAnime] = useState();

   async function fetchData() {
      // const populerAnime = await getAnimeResponse({ resource: "top/anime", query: `page=${page}` });
      const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
      setTopAnime(populerAnime);
   }

   useEffect(() => {
      fetchData();
   }, [page])

   return (
      <div>
         <HeaderMenu title={`Anime Terpopuler #${page}`} />
         <AnimeList api={topAnime} />
         <Pagination page={page} lastPage={topAnime?.pagination?.last_visible_page} setPage={setPage} />
         {/* pagination.last_visible_page ini dari API */}
      </div>
   );
}