import { useEffect } from 'react';
import { ICountryData } from '../interfaces';

type Props = {
  countries: ICountryData[], 
  noCurrentCountries:(noCurrentCountries:boolean) => void
}
const Country = ({countries, noCurrentCountries }:Props) => {
    /*    checking if there are any data(countries) in current page   */
  useEffect(() => {
    if(countries.length === 0) noCurrentCountries(true);
    else if(countries.length !== 0) noCurrentCountries(false);
    console.log("current countries length: " + countries.length + "; current countries: ")
    console.log(countries)
  }, [countries.length])

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