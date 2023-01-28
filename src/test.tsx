import axios from 'axios';
import { ICountryData } from './interfaces';

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
    else{
      console.log("wtf");
      
       sorted = [...filteredData]
    }

    console.log("; sorted: "); console.log(sorted);
    console.log(Error);
    
  return {sorted, newOrder};
}



export const Filter = (filter: number, filteredData:ICountryData[], dataCopy:ICountryData[]) => {
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