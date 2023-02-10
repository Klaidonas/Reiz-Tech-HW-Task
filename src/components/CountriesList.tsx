import  { useState } from 'react';
import Country from './Country';
import { ICountryData } from '../interfaces';
import Pagination from './pagination';

type Props = {
  filteredData:ICountryData[]
}
const CountryList = ({ filteredData }:Props) => {
  /*    PAGINATION   */
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage:number = 8;
  const indexOfLastCountry:number = currentPage * countriesPerPage;
  const indexOfFirstCountry:number = indexOfLastCountry - countriesPerPage;
  const currentCountries:ICountryData[] = [...filteredData].slice(indexOfFirstCountry, indexOfLastCountry);

  const [noCurrentCountries, setNoCurrentCountries] = useState<boolean>(false);

  /*    changing current page(pageNumber brought from <Pagination />)   */
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log("page number:" + pageNumber);
  }

  /*changing current page to the first one if there are no countries in current page*/
  const isThereCurrentCountries = (noCurrentCountries:boolean) => {
    setNoCurrentCountries(noCurrentCountries)
    if(noCurrentCountries)console.log("noCurrentCountries: " + noCurrentCountries)
  }

  return (
    <div>
      <Country countries={currentCountries} 
        noCurrentCountries = {isThereCurrentCountries}/>
      <Pagination countriesPerPage={countriesPerPage} 
        totalCountries={filteredData.length} 
        paginate={paginate}
        noCurrentCountries = {noCurrentCountries}/>
    </div>
  );
};
export default CountryList;