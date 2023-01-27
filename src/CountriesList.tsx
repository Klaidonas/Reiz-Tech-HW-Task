import React, { useEffect, useState } from 'react';
//import useFetch from './useFetch';
import Country from './Country';
import { ICountryData } from './interfaces';
import { Blabla } from './test';

const CountryList:React.FC = () => {
 // const data:ICountryData[] = []
 // const {data, loading, error} = useFetch("https://restcountries.com/v2/all?fields=name,region,area");
  const [filteredData, setFilteredData] = useState<ICountryData[]>([]);
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  useEffect(() => {
    test();
  }, [])
  
  const test = async() => {
  const {data, error}:any = await Blabla("https://restcountries.com/v2/all?fields=name,region,area");
  setDataCopy(data);
  setFilteredData(data);
  if(error) console.log("error: " + error);
  console.log("response: " + JSON.stringify(data));
  }

   

  const handleFilter = (filter: number) => {
    if(filter===0) {
      var smallerThanLt = dataCopy.filter((country: { area: number; }) => {
        return country.area < 65300.0;
      })
      setFilteredData(smallerThanLt);
    }
    else if(filter===1) {
      var inOceania = dataCopy.filter((country: { region: string; }) => {
        return country.region === "Oceania";
      })
      setFilteredData(inOceania);
    }
    else if(filter===2) {
      setFilteredData(dataCopy);
      }
  }
  

  //  console.log("old List: " + JSON.stringify(data), data?.length);
  //  console.log("filtered Data: " + JSON.stringify(filteredData), filteredData?.length);
  
  return (
    <div className="content">
      <h1>{filteredData ? "zjbs datax" : "pzdc data"}</h1>
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

function async(arg0: string): { data: any; loading: any; error: any; } {
  throw new Error('Function not implemented.');
}
