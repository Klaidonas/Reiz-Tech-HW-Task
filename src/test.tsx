import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICountryData } from './interfaces';

export const Blabla = async(url:string) => {
  // const [data, setData] = useState<ICountryData[]>([]);
  // const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  // const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  var error='';
  var data:any;
  await axios
  .get(url).
  then((response) => {data = response.data;}).
  catch((err) => {error=err})
  .finally(() => {})
  return {data, error};
}