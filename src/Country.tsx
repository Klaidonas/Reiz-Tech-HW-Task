import React, { FC } from 'react';
import { ICountryData } from './interfaces';

type Props = {
  country: ICountryData;
}

const Country: FC<Props> = ({country}) => {
  return (
    <li className='countie-element'>
        <h4>{country.name}</h4>
        <p>{country.region}</p>
        <p>{country.area}</p>
    </li>
  );
};

export default Country;