import React, { useState } from "react";

const Sample = () => {
  const [search,setSearch] = useState('');
    function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <>
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
    </>
  );
};

const Search = ({value,onChange,children})=>{

  return (
  <>
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  </>)

}

export default Sample;