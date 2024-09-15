import { DOTS, usePagination } from "../hooks/usePagination";

function Pagination({
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
  onPageChange,
}: any) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log(paginationRange, "paginationRange");
  const lastPage = paginationRange[paginationRange.length - 1];

  const commonPaginationItemClasses = `
     text-inherit mx-2 p-0 text-center
    flex justify-center items-center border-none border-radius-full
    w-12 h-12 cursor-pointer
  `;
  const selectedClasses =
    "nds-primary-container-background nds-on-primary-container-color";

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="w-full flex items-center flex-wrap xs:flex-nowrap justify-center">
      <ul
        className={`
        flex flex-row
        mb-0
        w-full p-0 d-flex justify-center items-start
        `}
      >
        <li>
          <button
            type="button"
            className={`
              ${commonPaginationItemClasses} 
              ${currentPage === 1 ? "disabled" : ""}
              bg-transparent
            `}
            disabled={currentPage === 1}
            onClick={onPrevious}
          >
            <span>&larr;</span>
          </button>
        </li>

        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={pageNumber + Math.random().toString()}
                className={`${commonPaginationItemClasses} bg-transparent cursor-default`}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <button
                type="button"
                className={`${commonPaginationItemClasses} ${
                  pageNumber === currentPage
                    ? selectedClasses
                    : "bg-transparent"
                } `}
                onClick={() => onPageChange(Number(pageNumber))}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li>
          <button
            type="button"
            className={`
              ${commonPaginationItemClasses} 
              ${currentPage === lastPage ? "disabled" : ""}
              bg-transparent
            `}
            disabled={currentPage === lastPage}
            onClick={onNext}
          >
            <span>&rarr;</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
