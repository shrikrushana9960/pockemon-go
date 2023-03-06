import { Button, Divider, List, Pagination, Skeleton, Spin } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PockemonCard = React.lazy(() => import("./components/PockemonCard"));
const SearchBox = React.lazy(() => import("./components/SearchBox"));

const App = () => {
  const [page, setShow] = useState(false);
  return (
    <div>
      <Button>{page ? "InfiniteScroll" : "Pagination"}</Button>

      {page ? <Pagination /> : <InfiniteScroll />}
    </div>
  );
};
export default App;
