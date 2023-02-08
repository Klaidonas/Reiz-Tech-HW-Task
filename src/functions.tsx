import axios from 'axios';
import { log } from 'console';
import { ICountryData } from './interfaces';

/*    FETCHING     */
export const CountriesFetch = async(url:string) => {
  var error='';
  var data:ICountryData[]=[];
  await axios
  .get(url)
  .then((response) => {data = response.data;})
  .catch((err) => {error=err})
  .finally(() => {})
  return {data, error };
}

 /*    SORTING     */
export const Sort = async(filteredData:ICountryData[], order:string) => {
  var sorted:ICountryData[]=[];
  var newOrder:string = order;
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
export const Filter = (filter: number, filteredData:ICountryData[], dataCopy:ICountryData[]) => {
  console.log(filter);
  
  var newFilteredData:ICountryData[]=[];
  if(filter===0) {
    var smallerThanLt = filteredData.filter((country: { area: number; }) => {
      return country.area < 65300.0;
    })
    newFilteredData = smallerThanLt;
  }
  else if(filter===1) {
    var inOceania = filteredData.filter((country: { region: string; }) => {
      return country.region === "Oceania";
    })
    newFilteredData=inOceania;
  }
  else if(filter===2) {
    newFilteredData=dataCopy;
    }
  return {newFilteredData}
}

/*    ACTIVE FILTER    */
export const handleActiveFilterUI = (filter:number) => {
  const button:HTMLElement | null = document.getElementById("btn" + filter);
  console.log(button);
  if(filter!==2) {
    button?.classList.add('active');
  }
  else {
    document.getElementById("btn0")?.classList.remove('active');
    document.getElementById("btn1")?.classList.remove('active');
  }
}