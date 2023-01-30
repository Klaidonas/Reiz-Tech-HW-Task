import React, { useState } from 'react';
import { IPagination } from '../interfaces';

const Pagination = ({ elementsPerPage, totalPosts, paginate }: IPagination) => {
  const [active, setActive] = useState<number>(1);
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginate = (nr:number) => {
    paginate(nr);
    setActive(nr);
  }

  return (
    <div className='pagination'>
      <ul>
        {pageNumbers.map(nr => (
          <li key={nr} className={"nr" + String(nr)}>
            <button onClick={() => handlePaginate(nr)} className={(active===nr ? "active" : 'not-active')}>
              {nr}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;