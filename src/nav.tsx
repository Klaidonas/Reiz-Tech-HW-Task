import React from 'react';

const Nav = ({handleFilter, sorting}:any) => {
  return (
    <div className="navigation"> 
      <div className="filters">
        <button id = "btn0" onClick={() => handleFilter(0)}>Smaller Than Lithuania</button>
        <button id = "btn1" onClick={() => handleFilter(1)}>In Oceania</button>
        <button id = "btn2" onClick={() => handleFilter(2)}>All countries</button>
      </div>
      <div className="sort-btn">
        <button onClick={() => sorting()}>sort</button>
      </div>
    </div>
  );
};

export default Nav;