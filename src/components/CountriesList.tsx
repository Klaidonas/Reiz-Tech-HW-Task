import  { useEffect, useState } from 'react';
import Country from './Country';
import { ICountryData, IDATA, ISort} from '../interfaces';
import { CountriesFetch } from '../functions';
import Pagination from './pagination';

type Props = {
  countriesFetch: (data:ICountryData[]) => void,
  newFilteredData:ICountryData[]
}
const CountryList = ({countriesFetch, newFilteredData}:Props) => {
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);

  useEffect(() => {
    fetch();
  }, [isDataFetched])

  /*    FETCHING     */
  const fetch = async() => {
    const {countries, error }:IDATA = await CountriesFetch("https://restcountries.com/v2/all?fields=name,region,area");
    countriesFetch(countries);
    if(error) console.log("error: " + error);
    setIsDataFetched(true);
  }

  /*    PAGINATION   */
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage:number = 8;
  const indexOfLastCountry:number = currentPage * countriesPerPage;
  const indexOfFirstCountry:number = indexOfLastCountry - countriesPerPage;
  const currentCountries:ICountryData[] = newFilteredData?.slice(indexOfFirstCountry, indexOfLastCountry);

  /*    changing current page(pageNumber brought from Pagination)   */
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(paginate);
  }

  const [noCurrentCountries, setNoCurrentCountries] = useState<boolean>(false);
  /*changing current page to "1" if there were no countries in current page*/
  const AreThereCurrentCountries = (noCurrentCountries:boolean) => {
    setNoCurrentCountries(noCurrentCountries)
    console.log("AreThereCurrentCountries")
    setCurrentPage(1);
  }
  console.log(noCurrentCountries)

  return (
    <div>
      { newFilteredData!==undefined && 
      <Country countries={currentCountries} 
      noCurrentCountries = {AreThereCurrentCountries} isDataFetched = {isDataFetched}/>
      }
      { newFilteredData!==undefined && 
      <Pagination countriesPerPage={countriesPerPage} 
        totalCountries={newFilteredData.length} paginate={paginate}
        noCurrentCountries = {noCurrentCountries}/>}
    </div>
  );
};
export default CountryList;