import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICountryData } from './interfaces';

function useFetch(url: string) {
  const [data, setData] = useState<ICountryData[]>([]);
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
    .get(url)
    .then((response) => {
      setData(response.data);
      setDataCopy(response.data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  return {data, loading, error, dataCopy};

};

export default useFetch;