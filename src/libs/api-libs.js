

export const getAnimeResponse = async (resource, query) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
   const anime = await response.json();
   return anime;
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
   // const response = await getAnimeResponse({ resource: resource });
   const response = await getAnimeResponse(resource);
   return response.data.flatMap(item => item[objectProperty]);
}

export const reproduce = (data, gap) => {
   const first = ~~(Math.random() * (data.length - gap) + 1);
   const last = first + gap;

   const response = {
      data: data.slice(first, last)
   }
   return response;
}

// item.entry item itu variabel terserah kalau entry itu dari API recommendedAnime dimana data nya berada di object data masuk ke object entry(search aja di api nya)