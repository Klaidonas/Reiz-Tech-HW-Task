import { useEffect, useState } from 'react';

type Props = {
  countriesPerPage: number,
  totalCountries: number,
  paginate: (pageNumber: number) => void,
  noCurrentCountries: boolean
}
const Pagination = ({ countriesPerPage, totalCountries, paginate, noCurrentCountries }: Props) => {
  const [active, setActive] = useState<number>(1);
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginate = (nr:number) => {
    paginate(nr);
    setActive(nr);
  }
  useEffect(() => {
    if((noCurrentCountries)) handlePaginate(1)
  }, [noCurrentCountries])
  
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