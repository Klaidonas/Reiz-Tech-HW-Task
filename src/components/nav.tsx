import { useRef, useState } from "react";
import { EFilters } from "../Enums";

type Props = {
  handleFilter: (filter:string) => void,
  sorting: () => void
}
const Nav = ({handleFilter, sorting}:Props) => {
  const [active, setActive] = useState<string>(EFilters.all)

  const handleClick = (name:string) => {
    handleFilter(name);
    setActive(name);
  }

  const filters = [EFilters.area, EFilters.region, EFilters.all]
  
  return (
    <div className="navigation"> 
      <div className="filters">
        {filters.map(filter =>
          <button className={active == filter ? "active" : undefined} onClick={() => handleClick(filter)}>{filter}</button>
        )}
      </div>
      <div className="sort-btn">
        <button onClick={() => sorting()}>sort</button>
      </div>
    </div>
  );
};
export default Nav;