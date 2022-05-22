import React, { useState, useEffect } from "react";
const Sample = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const getUser = async () => {
    return { id: "1", name: "Robin" };
  };

  function handleChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  return (
    <>
      <div>
        {user ? <p>Signed in as {user.name}</p> : null}
        <Search value={search} onChange={handleChange}>
          Search:
        </Search>
        <p>Searches for {search ? search : "..."}</p>
      </div>
    </>
  );
};

const Search = ({ value, onChange, children }) => {
  return (
    <>
      <div>
        <label htmlFor="search">{children}</label>
        <input id="search" type="text" value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default Sample;
