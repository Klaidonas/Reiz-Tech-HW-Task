import './styles/style.css';
import './styles/navigation.css';
import './styles/countriesList.css';
import './styles/pagination.css';
import { useState } from 'react';
import CountryList from './components/CountriesList';
import { Filter, handleActiveFilterUI, Sort } from './functions';
import { ICountryData, ISort } from './interfaces';
import Nav from './components/nav';

function App() {
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  const [filteredData, setFilteredData] = useState<ICountryData[]>([]);
  const [order, setOrder] = useState("DSC");

  /*  BRINGING DATA(COUNTRIES) FROM CHILD(CountryList)  */
  const countriesFetch = (countryList:ICountryData[]) => {
    setDataCopy(countryList);
    setFilteredData(countryList);
  }
  console.log(filteredData);

  /*    FILTER     */
  const handleFilter = async(filter:string) => {
    const {newFilteredData} = Filter(filter, filteredData as ICountryData[], dataCopy as ICountryData[]);
    setFilteredData(newFilteredData)
    handleActiveFilterUI(filter);
  }

  /*    SORTING     */
  const sorting = async ()=> {
    const { sorted, newOrder }:ISort = await Sort(filteredData as ICountryData[], order);
    setFilteredData(sorted);
    setOrder(newOrder);
  }

  return (
    <div className="content">
      <h1>{filteredData ? "Reiz Tech Task" : "data error"}</h1>
      <Nav handleFilter = {handleFilter} sorting = {sorting}/>
      <CountryList countriesFetch={countriesFetch} newFilteredData={filteredData}/>
    </div>
  );
}
export default App;