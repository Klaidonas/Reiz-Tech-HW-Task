import React, { useEffect, useState } from 'react';
import Country from './components/Country';
import { ICountryData, IDATA, ISort} from './interfaces';
import { CountriesFetch, Filter, handleActiveFilterUI, Sort } from './functions';
import Pagination from './components/pagination';

const CountryList = () => {
  const [filteredData, setFilteredData] = useState<ICountryData[]>([]);
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    fetch();
  }, [])
  
   /*    FETCHING     */
  const fetch = async() => {
    const {data, error }:IDATA = await CountriesFetch("https://restcountries.com/v2/all?fields=name,region,area");
    setFilteredData(data);
    setDataCopy(data);
    if(error) console.log("error: " + error);
  }

  /*    SORTING     */
  const sorting = async ()=> {
    const { sorted, newOrder }:ISort = await Sort(filteredData, order);
    setFilteredData(sorted);
    setOrder(newOrder);
  }

  /*    FILTER     */
  const handleFilter = (filter:number) => {
    const {newFilteredData} = Filter(filter, filteredData, dataCopy);
    setFilteredData(newFilteredData)
    handleActiveFilterUI(filter);
  }

/*    PAGINATION   */
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage:number = 8;
  const indexOfLastCountry:number = currentPage * countriesPerPage;
  const indexOfFirstCountry:number = indexOfLastCountry - countriesPerPage;
  const currentCountries:ICountryData[] = filteredData.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(paginate);
  }

  return (
    <div className="content">
      <h1>{filteredData ? "Reiz Tech Task" : "data error"}</h1>
      <div className="navigation">
        <div className="filters">
          <button id = "btn0" onClick={() => handleFilter(0)}>Smaller Than Lithuania</button>
          <button id = "btn1" onClick={() => handleFilter(1)}>In Oceania</button>
          <button id = "btn2" onClick={() => handleFilter(2)}>All countries</button>
        </div>
        <div className="sort-btn">
          <button onClick={() => sorting()}>sort</button>
        </div>
      </div>
      <Country countries={currentCountries}/>
      <Pagination countriesPerPage={countriesPerPage} totalCountries={filteredData.length} paginate={paginate}/>
    </div>
  );
};
export default CountryList;