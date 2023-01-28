import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICountryData } from './interfaces';

export const Blabla = async(url:string, order:string) => {
  var error='';
  var data:ICountryData[]=[];
  var sorted:any;
  await axios
  .get(url).
  then((response) => {data = response.data;}).
  catch((err) => {error=err})
  .finally(() => {
    if(order==="ASC") {
    sorted = [...data].sort((a,b)=>
    a.name > b.name ? 1 : -1);
    }
    else if(order==="DSC") {
      sorted = [...data].sort((a,b)=>
      a.name < b.name ? 1 : -1);
      }
      else sorted = [...data]
  })
  return {data, error, sorted};
}
