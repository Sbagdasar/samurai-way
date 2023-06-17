import React from 'react';
import s from "./Paginator.module.css";
type PaginatorPT ={
  totalItemsCount:number
  pageSize:number
  onSetCurrentPage:(p:number)=>void
  currentPage:number
}
export const Paginator = ({totalItemsCount, pageSize, onSetCurrentPage, currentPage}:PaginatorPT) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = Array.from({length: +pagesCount}, (_, i: number) => +i + 1)

  return (
    <div className={s.pagination}>
      {
        pages.map(p => {
          return (
            <span key={p}
                  className={currentPage === p ? s.selectedPage : s.page}
                  onClick={() => onSetCurrentPage(p)}>{p}</span>
          )
        })
      }
    </div>
  );
};

