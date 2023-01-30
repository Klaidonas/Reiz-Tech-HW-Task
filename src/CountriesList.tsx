import React, { useEffect, useState } from 'react';
import Country from './components/Country';
import { ICountryData, IDATA, ISort} from './interfaces';
import { CountriesFetch, Filter, Sort } from './functions';
import Pagination from './components/pagination';

const CountryList:React.FC = () => {
  const [filteredData, setFilteredData] = useState<ICountryData[]>([]);
  const [dataCopy, setDataCopy] = useState<ICountryData[]>([]);
  const [order, setOrder] = useState("ASC");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch();
  }, [])
  
   /*    FETCHING     */
  const fetch = async() => {
  const {data, error }:IDATA = await CountriesFetch("https://test-api-imzm.onrender.com/posts");
  setFilteredData(data);
  setDataCopy(data);
  if(error) {
    console.log("error: " + error);
    setErrorMsg(error);
  }
  }

  /*    SORTING     */
  const sorting = async ()=> {
    const { sorted, newOrder }:ISort = await Sort(filteredData, order);
      setFilteredData(sorted);
      setOrder(newOrder);
  }

  /*    FILTER     */
  const handleFilter = (filter:number) => {
    const {newFilteredData} = Filter(filter, filteredData, dataCopy);
    setFilteredData(newFilteredData)
  }

/*    PAGINATION   */
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);
  const indexOfLastCountry = currentPage * elementsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - elementsPerPage;
  const currentCountries = filteredData.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }
  
  return (
    <div className="content">
      <h1>{errorMsg ? errorMsg + " ; display data from api task(ReactJS)" : "Displaying data from api task(ReactJS)"}</h1>
      <div className="navigation">
        <div className="filters">
          <button onClick={() => handleFilter(0)}>Smaller Than Lithuania</button>
          <button onClick={() => handleFilter(1)}>In Oceania</button>
          <button onClick={() => handleFilter(2)}>All countries</button>
        </div>
        <div className="sort-btn"><button onClick={() => sorting()}>sort</button></div>
      </div>
      <Country countries={currentCountries} country={{//  }
        toLowerCase: function (): ICountryData {//        }      Did not understand how to define
          throw new Error('Function not implemented.');// }      "country", the error said that "country"
        },//                                              } ---- had missing type and
        name: '',//                                       }      my previous types did not work, so 
        region: '',//                                     }      I just went with recommended quick fix
        area: 0,//                                        }
        independence: false//                             }
      }} />
      <Pagination elementsPerPage={elementsPerPage} totalPosts={filteredData.length} paginate={paginate}/>
    </div>
  );
};
export default CountryList;