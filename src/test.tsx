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
  if(order==="ASC") {
    console.log("order = ASC; filtered Data:");console.log(filteredData);
    
    sorted = [...filteredData].sort((a,b)=>
    a.name > b.name ? 1 : -1);
    }
    else if(order==="DSC") {
      sorted = [...filteredData].sort((a,b)=>
      a.name < b.name ? 1 : -1);
    }
    else{
      console.log("wtf");
      
       sorted = [...filteredData]
    }

    console.log("; sorted: "); console.log(sorted);
    console.log(Error);
    
  return {sorted};
}
