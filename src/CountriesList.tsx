import React, { useEffect, useState } from 'react';
import Country from './components/Country';
import { ICountryData, IDATA, ISort} from './interfaces';
import { CountriesFetch, Filter, handleActiveFilterUI, Sort } from './functions';
import Pagination from './components/pagination';

type props = {
  toParent:any,
  newFilteredData:any
}
const CountryList = ({toParent, newFilteredData}:props) => {
  const [dataFetched, setDataFetched] = useState<number>(0);
  console.log(newFilteredData);

  useEffect(() => {
    fetch();
  }, [dataFetched])

  /*    FETCHING     */
  const fetch = async() => {
    const {data, error }:IDATA = await CountriesFetch("https://restcountries.com/v2/all?fields=name,region,area");
    toParent(data);
    if(error) console.log("error: " + error);
    setDataFetched(1);
  }

  /*    PAGINATION   */
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage:number = 8;
  const indexOfLastCountry:number = currentPage * countriesPerPage;
  const indexOfFirstCountry:number = indexOfLastCountry - countriesPerPage;
  const currentCountries:any = newFilteredData?.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(paginate);
  }

  return (
    <div>
      { newFilteredData!==undefined && 
      <Country countries={currentCountries}/>}
      { newFilteredData!==undefined && 
      <Pagination countriesPerPage={countriesPerPage} 
        totalCountries={newFilteredData.length} paginate={paginate}/>}
    </div>
  );
};
export default CountryList;