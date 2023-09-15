import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteProduct } from "./actions";
import ProductsCp from "../../components/Products";
function Component() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const { getingProducts, updating } = useSelector((state) => state.data.flags);
  useEffect(() => {
    if (data.length === 0) dispatch(fetchData());
  }, [data, dispatch]);

  const handleRemovePrd = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <ProductsCp
      projects={data}
      loadingUpdatePrj={updating}
      getingProducts={getingProducts}
      handleRemovePrd={handleRemovePrd}
    />
  );
}

export default Component;
