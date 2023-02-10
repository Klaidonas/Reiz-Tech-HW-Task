import { useEffect } from 'react';
import { ICountryData } from '../interfaces';

type Props = {
  countries: ICountryData[], 
  noCurrentCountries:(noCurrentCountries:boolean) => void, 
  isDataFetched:boolean
}
const Country = ({countries, noCurrentCountries, isDataFetched}:Props) => {
  console.log("current countries: " + countries.length)

    /*    checking if there are any data(countries) in current page   */
  useEffect(() => {
    if(countries.length === 0 && (isDataFetched))  noCurrentCountries(true);
    else if(countries.length !== 0 && (isDataFetched)) noCurrentCountries(false);
  }, [countries])

  return (
    <ul className='countries-list'>
      {countries.map((country, i) => (
        <li className='country-element' key={i}>
          <div className="li-container">
            <div className='li-column'>
              <p>Country name:</p>
              <h4 className='data'>{country.name}</h4>
            </div>
            <div className='li-column'>
              <p>Country Region:</p>
              <p className='data'>{country.region}</p>
            </div>
            <div className='li-column'>
              <p>Country area: </p>
              <p className='data'>{country.area}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Country;