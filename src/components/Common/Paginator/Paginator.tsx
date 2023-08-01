import React, {useState} from 'react';
import s from "./Paginator.module.css";
type PaginatorPT ={
  totalItemsCount:number
  pageSize:number
  onSetCurrentPage:(p:number)=>void
  currentPage:number
  portionSize?: number
}
export const Paginator = ({totalItemsCount, pageSize, onSetCurrentPage, currentPage, portionSize = 10}:PaginatorPT) => {



  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = Array.from({length: +pagesCount}, (_, i: number) => +i + 1)
  let portionCount = Math.ceil(pagesCount/portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber-1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={s.pagination}>
      {
        pages.filter(p => p>= leftPortionPageNumber && p<=rightPortionPageNumber)
          .map(p => {
          return (
            <span key={p}
                  className={currentPage === p ? s.selectedPage : s.page}
                  onClick={() => onSetCurrentPage(p)}>{p}</span>
          )
        })
      }
      {leftPortionPageNumber>1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
      {portionCount>portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}

    </div>
  );
};

