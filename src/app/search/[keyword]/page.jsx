
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
   const { keyword } = params; //keyword yg kanan berasal dari folder [keyword] yg punya value apapun value nya url
   const decodeKeyword = decodeURI(keyword);//agar inputan yg ada spasi nya tidak dibaca % 

   // const searchAnime = await getAnimeResponse({ resource: "anime", query: `q=${decodeKeyword}` });
   const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

   return (
      <>
         <section>
            <Header title={`Pencarian untuk ${decodeKeyword} ...`} />
            <AnimeList api={searchAnime} />
         </section>
      </>
   )
}
