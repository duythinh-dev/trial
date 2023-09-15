import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductDetailComp from "../../components/ProductDetail/index";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [dataPrd, setDataPrd] = useState();
  const [moreProducts, setMoreProducts] = useState([]);
  const { productId } = useParams();
  const dataAll = useSelector((state) => state.data.data);

  useEffect(() => {
    const data = (() => {
      const indexItem = dataAll.findIndex((r) => r.id === productId * 1);
      if (indexItem !== -1) {
        return dataAll[indexItem];
      }
      return null;
    })();
    setDataPrd(data);
    const moreProds =
      data !== null
        ? (() => {
            const result = [];

            for (const item of dataAll) {
              if (item.id !== data.id) {
                result.push(item);

                if (result.length === 2) {
                  break;
                }
              }
            }
            return result;
          })()
        : [];
    setMoreProducts(moreProds);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  console.log(moreProducts);
  return dataPrd && dataPrd.id !== productId ? (
    <ProductDetailComp data={dataPrd} moreProducts={moreProducts} />
  ) : (
    "Not Found"
  );
}
