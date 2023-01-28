import React, { useEffect, useState } from 'react';
//import useFetch from './useFetch';
import Country from './Country';
import { ICountryData, IDATA} from './interfaces';
import { CountriesFetch, Sort } from './test';


const CountryList:React.FC = () => {
  const [filteredData, setFilteredData] = useState<ICountryData[]>([]);
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  useEffect(() => {
    fetch();
    console.log('usefetch suveike');
  }, [])
  


  const [order, setOrder] = useState("ASC");


  const fetch = async() => {
  const {data, error }:IDATA = await CountriesFetch("https://restcountries.com/v2/all?fields=name,region,area");
  setFilteredData(data);
  setDataCopy(data);
  console.log("data:");
  console.log(data);
  console.log("filteredData:");
  console.log(filteredData);
  
  if(error) console.log("error: " + error);
  //console.log("order: " + order);
  }
 

  /*    SORTINGAS     */
  const sorting = async ()=> {
    console.log("filteredData:");
    console.log(filteredData);
    console.log(order);
    
    const { sorted }:any = await Sort(filteredData, order);
    console.log("po awaito sorted:"); console.log(sorted);

    console.log("filteredData po sorto:");
    console.log(filteredData);
    
    if(order ==="ASC") {
      setFilteredData(sorted);
      setOrder("DSC");
      console.log("order ===ASC");
    }
    else if(order ==="DSC") {
      setFilteredData(sorted);
      setOrder("ASC");
      console.log("order ===DSC")
    }
    console.log(sorted);    
  }
    /*    SORTINGAS     */

    /*    FILTRAVIMAS     */
  const handleFilter = (filter: number) => {
    if(filter===0) {
      var smallerThanLt = filteredData.filter((country: { area: number; }) => {
        return country.area < 65300.0;
      })
      setFilteredData(smallerThanLt);
    }
    else if(filter===1) {
      var inOceania = filteredData.filter((country: { region: string; }) => {
        return country.region === "Oceania";
      })
      setFilteredData(inOceania);
    }
    else if(filter===2) {
      setFilteredData(dataCopy);
      }
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