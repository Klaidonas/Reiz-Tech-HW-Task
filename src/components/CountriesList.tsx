import  { useEffect, useState } from 'react';
import Country from './Country';
import { ICountryData, IDATA, IPagination, ISort} from '../interfaces';
import { CountriesFetch, Filter, handleActiveFilterUI, Sort } from '../functions';
import Pagination from './pagination';

type props = {
  toParent: (data:ICountryData[]) => void,
  newFilteredData:ICountryData[]
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
  const currentCountries:ICountryData[] = newFilteredData?.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(paginate);
  }

  return (
    <div>
      { newFilteredData!==undefined && 
      <Country countries={currentCountries}/>
      }
      { newFilteredData!==undefined && 
      <Pagination countriesPerPage={countriesPerPage} 
        totalCountries={newFilteredData.length} paginate={paginate}/>}
    </div>
  );
};
export default CountryList;