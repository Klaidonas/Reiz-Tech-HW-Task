import { useState } from "react";
import { EFilters } from "../Enums";

type Props = {
  handleFilter: (filter:string) => void,
  sorting: () => void
}
const Nav = ({handleFilter, sorting}:Props) => {
  const [active, setActive] = useState<string[]>([EFilters.all])

  const filters = [EFilters.area, EFilters.region, EFilters.all]

  const handleClick = (filter:string) => {
    handleFilter(filter);

    if(filter === EFilters.all) {
      setActive([EFilters.all]);
    } 
    else if(active.includes(EFilters.all)) {
      setActive([filter]);
    } 
    else if(!active.includes(filter) && active.length < 2) {
      setActive([...active, filter]);
    }
  }
  
  return (
    <div className="navigation"> 
      <div className="filters">
      {filters.map((filter, i) =>
          <button key={i} className={active.includes(filter) ? "active" : undefined} onClick={() => handleClick(filter)}>{filter}</button>
        )}
      </div>
      <div className="sort-btn">
        <button onClick={() => sorting()}>sort</button>
      </div>
    </div>
  );
};
export default Nav;