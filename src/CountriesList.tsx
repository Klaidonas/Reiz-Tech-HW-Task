import React, { useEffect, useState } from 'react';
//import useFetch from './useFetch';
import Country from './Country';
import { ICountryData, IDATA} from './interfaces';
import { CountriesFetch, Filter, Sort } from './test';


const CountryList:React.FC = () => {
  const [filteredData, setFilteredData] = useState<ICountryData[]>([]);
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  useEffect(() => {
    fetch();
    console.log('usefetch suveike');
  }, [])
  


  


  const fetch = async() => {
  const {data, error }:IDATA = await CountriesFetch("https://restcountries.com/v2/all?fields=name,region,area");
  setFilteredData(data);
  setDataCopy(data);
  if(error) console.log("error: " + error);
  }

  /*    SORTINGAS     */
  const [order, setOrder] = useState("ASC");
  console.log(order);
  const sorting = async ()=> {
    const { sorted, newOrder }:any = await Sort(filteredData, order);
      setFilteredData(sorted);
      setOrder(newOrder);
  }
    /*    SORTINGAS     */

    /*    FILTRAVIMAS     */
  const handleFilter = (filter:any) => {
    const {newFilteredData} = Filter(filter=filter, filteredData, dataCopy);
    setFilteredData(newFilteredData)
}
      /*    FILTRAVIMAS     */
  return (
    <div className="content">
      <h1>{filteredData ? "zjbxs datax" : "pzdc data"}</h1>
      <button onClick={() => sorting()}>sort</button>
      <button onClick={() => handleFilter(0)}>Smaller Than Lithuania</button>
      <button onClick={() => handleFilter(1)}>In Oceania</button>
      <button onClick={() => handleFilter(2)}>All countries</button>
      <ul>
        {filteredData?.map((country: ICountryData) => {
          return(
            <Country key={Math.random()} country={country} />
          )
        })}
      </ul>
    </div>
  );
};

export default CountryList;