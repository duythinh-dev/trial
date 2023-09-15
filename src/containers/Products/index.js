import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";
import ProductsCp from "../../components/Products";
function Component() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    if (data.length === 0) dispatch(fetchData());
  }, [data, dispatch]);

  return <ProductsCp projects={data} />;
}

export default Component;
