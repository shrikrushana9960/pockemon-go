import {  Divider, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PockemonCard from "./PockemonCard";
import SearchBox from "./SearchBox";
const InfinteLoading = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [page, setPage] = useState(0);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    console.log(count);
    setPage(page + 1);
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${50 * page}`)
      .then((res) => res.json())
      .then((body) => {
        setCount(body.count);
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        // height: 500,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <h1 style={{textAlign:"center"}}>Pockemon Go</h1>
      <SearchBox/>
      {count && (
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < count}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          // scrollableTarget="scrollableDiv"
        >
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={(item) => <PockemonCard item={item} />}
          />
        </InfiniteScroll>
      )}
    </div>
  );
};
export default InfinteLoading;