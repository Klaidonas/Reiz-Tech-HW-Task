import { useState } from "react";
import { EFilters } from "../Enums";
import { ICountryData } from "../interfaces";

type Props = {
  handleFilter: (filter:string) => void,
  sorting: () => void
}
const Nav = ({handleFilter, sorting}:Props) => {

  const [active, setActive] = useState<string>(EFilters.all)
  const handleClick = (filter:string) => {
    handleFilter(filter);
    setActive(filter);
    console.log(filter);
    console.log(Date.now())
  }
  const filters = [EFilters.area, EFilters.region, EFilters.all]
  
  return (
    <div className="navigation"> 
      <div className="filters">
      {filters.map((filter, i) =>
          <button key={i} className={active === filter ? "active" : undefined} onClick={() => handleClick(filter)}>{filter}</button>
        )}
      </div>
      <div className="sort-btn">
        <button onClick={() => sorting()}>sort</button>
      </div>
    </div>
  );
};
export default Nav;