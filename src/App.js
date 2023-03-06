import { Button, Divider, List, Skeleton, Spin } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import InfiniteLoading from "./components/InfinteLoading"
import PaginationPage from "./components/PaginationPage"
const App = () => {
  const [page, setShow] = useState(true);
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Button style={{float:"right"}} onClick={()=>setShow(item=>!item)} type="primary">{page ? "InfiniteScroll" : "Pagination"}</Button>

      {page ? <PaginationPage /> : <InfiniteLoading/>}
    </div>
  );
};
export default App;
