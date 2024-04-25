

export default function Pagination({ page, lastPage, setPage }) {

   // fungsi scrolltop gunanya agar langsung scroll ke atas
   function scrollTop() {
      scrollTo({
         behavior: "smooth",
         top: 0
      })
   }
   function handleNextPage() {
      setPage((prevState) => prevState + 1);
      scrollTop();
   }
   function handlePrevPage() {
      setPage((prevState) => prevState - 1);
      scrollTop();
   }
   return (
      <div>
         <div className="flex justify-center items-center px-2 py-4 gap-4 text-color-primary">
            {page <= 1 ? null :
               <button className="transition-all hover:text-color-accent underline" onClick={handlePrevPage}>Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
               <button className="transition-all hover:text-color-accent underline" onClick={handleNextPage}>Next</button>
            }
         </div>
      </div>
   );
}