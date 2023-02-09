import axios from 'axios';
import { ICountryData } from './interfaces';

/*    FETCHING     */
export const CountriesFetch = async(url:string) => {
  let error='';
  let data:ICountryData[]=[];
  await axios
  .get(url)
  .then((response) => {data = response.data;})
  .catch((err) => {error=err})
  .finally(() => {})
  return {data, error };
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

/*    ACTIVE FILTER    */
export const handleActiveFilterUI = (filter:string) => {
  const button:HTMLElement | null= document.getElementById(filter);
  console.log(button);
  if(filter!=="all") {
    button?.classList.add('active');
  }
  else {
    document.getElementById("area")?.classList.remove('active');
    document.getElementById("region")?.classList.remove('active');
  }
}