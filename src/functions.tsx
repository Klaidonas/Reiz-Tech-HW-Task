import axios from 'axios';
import { useRef } from 'react';
import { ICountryData } from './interfaces';

/*    FETCHING     */
export const Fetch = async(url:string) => {
  let error='';
  let countries:ICountryData[]=[];
  await axios
  .get(url)
  .then((response) => {countries = response.data;})
  .catch((err) => {error=err})
  .finally(() => {})
  return {countries, error };
}

 /*    SORTING     */
export const Sort = async(filteredData:ICountryData[], order:string) => {
  let sorted:ICountryData[]=[];
  let newOrder:string = order;
  if(order==="ASC") {
    newOrder = "DSC";    
    sorted = [...filteredData].sort((a,b)=>
    a.name > b.name ? 1 : -1);
  }
  else if(order==="DSC") {
    newOrder = "ASC";
    sorted = [...filteredData].sort((a,b)=>
    a.name < b.name ? 1 : -1);
  }
  return {sorted, newOrder};
}

/*    FILTER     */
export const Filter = (filter: string, filteredData:ICountryData[], dataCopy:ICountryData[]) => {
  console.log(filter);
  
  let newFilteredData:ICountryData[]=[];
  if(filter==="area") {
    const smallerThanLt = filteredData.filter((country: { area: number; }) => {
      return country.area < 65300.0;
    })
    newFilteredData = smallerThanLt;
  }
  else if(filter==="region") {
    const inOceania = filteredData.filter((country: { region: string; }) => {
      return country.region === "Oceania";
    })
    newFilteredData=inOceania;
  }
  else if(filter==="all") {
    newFilteredData=dataCopy;
    }
  return {newFilteredData}
}

