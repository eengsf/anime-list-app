
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"


export default async function Page() {
  // const topAnime = await getAnimeResponse({ resource: "top/anime", query: "limit=8" });
  // let recommendedAnime = await getNestedAnimeResponse({ resource: "recommendations/anime", objectProperty: "entry" });
  // recommendedAnime = reproduce({ data: recommendedAnime, gap: 3 });

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 3);

  // ini ditambahi object data karena nanti di AnimeList di map harus manggil .data dulu sebelum ke isi2 nya 

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}
