import { useState } from 'react';
import { IPagination } from '../interfaces';

const Pagination = ({ countriesPerPage, totalCountries, paginate }: IPagination) => {
  const [active, setActive] = useState<number>(1);
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
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
            <a onClick={() => handlePaginate(nr)} href='#' className={(active===nr ? "active" : 'not-active')}>
              {nr}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;