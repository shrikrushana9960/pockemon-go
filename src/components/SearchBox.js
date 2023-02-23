import React, { useState, useEffect } from "react";
import styles from "./search.module.scss";
import PockemonCard from "./PockemonCard";
import { Divider } from "antd";
const SearchBox = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchitem, setSearchItem] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0")
      .then((res) => res.json())
      .then((body) => {
        console.log(body.results.map((item) => item.name));
        setSearchData(body.results);
      })
      .catch(() => {});
  }, []);

  return (
    <div className={styles.searchboxcontainer}>
      <form className={styles.searchbox + " searchform"}>
        <input
          type="text"
          placeholder="Search Pockemon"
          onChange={(e) => {
            e.target.value === ""
              ? setSearchItem([])
              : setSearchItem(
                  searchData.filter((item) =>
                    item.name.includes(e.target.value)
                  )
                );
          }}
          list="pockemons"
        />

        <button type="reset"></button>
      </form>
      {searchitem.length > 0 && (
        <>
          <h2>Searched item</h2>
          <div className={styles.container}>
            {searchitem.map((item, index) => (
              <PockemonCard key={index} item={item} />
            ))}
          </div>
        </>
      )}
      <Divider></Divider>
    </div>
  );
};

export default SearchBox;
