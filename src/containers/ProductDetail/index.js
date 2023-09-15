import React from "react";
import { useSelector } from "react-redux";
import ProductDetailComp from "../../components/ProductDetail/index";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const data = useSelector((state) => {
    const dataAll = state.data.data;
    const indexItem = dataAll.findIndex((r) => r.id === productId * 1);
    console.log(productId, dataAll, indexItem);
    if (indexItem !== -1) {
      return dataAll[indexItem];
    }
    return null;
  });
  console.log(data);
  return data ? <ProductDetailComp data={data} /> : "Not Found";
}
