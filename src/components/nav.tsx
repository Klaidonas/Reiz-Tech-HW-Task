type Props = {
  handleFilter: (filter:string) => void,
  sorting: () => void
}
const Nav = ({handleFilter, sorting}:Props) => {
  return (
    <div className="navigation"> 
      <div className="filters">
        <button id = "area" onClick={() => handleFilter("area")}>Smaller Than Lithuania</button>
        <button id = "region" onClick={() => handleFilter("region")}>In Oceania</button>
        <button id = "all" onClick={() => handleFilter("all")}>All countries</button>
      </div>
      <div className="sort-btn">
        <button onClick={() => sorting()}>sort</button>
      </div>
    </div>
  );
};
export default Nav;