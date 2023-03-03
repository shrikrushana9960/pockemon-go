import { Divider, List, Pagination, Skeleton, Spin } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PockemonCard = React.lazy(() => import("./components/PockemonCard"));
const SearchBox = React.lazy(() => import("./components/SearchBox"));

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [page, setPage] = useState(0);
  const loadMoreData = (value) => {
    if (loading) {
      return;
    }
    console.log(count);
    setPage(page + 1);
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${50 * value}`)
      .then((res) => res.json())
      .then((body) => {
        setCount(body.count);
        setData([...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  function onChnage(value) {
    loadMoreData(value - 1);
  }
  useEffect(() => {
    loadMoreData(0);
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Pockemon Go</h1>
      <SearchBox />

      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Spin />{" "}
        </div>
      ) : (
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={data}
          renderItem={(item) => <PockemonCard item={item} />}
        />
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          margin: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination total={940} hidden onChange={onChnage} showQuickJumper />
      </div>
    </div>
  );
};
export default App;
