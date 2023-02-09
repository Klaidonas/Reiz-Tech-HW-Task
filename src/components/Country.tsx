import { ICountryData } from '../interfaces';

type Props = {
  countries: ICountryData[]
}

const Country = ({countries}:Props) => {
  console.log("current countries:")
  console.log(countries)
  return (
    <ul className='countries-list'>
      {countries.map((country: ICountryData) => (
        <li className='country-element' key={Math.random()}>
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