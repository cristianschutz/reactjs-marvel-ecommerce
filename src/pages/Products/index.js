import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
import { ProductItem } from "../../components/ProductItem";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { id: titleStartsWith } = useParams();

  useEffect(() => {
    api
      .get("/v1/public/comics", {
        params: {
          titleStartsWith,
          limit: 10,
          hasDigitalIssue: true,
          orderBy: "onsaleDate",
        },
      })
      .then(function (response) {
        setProducts(response.data.data.results);
      });
  }, [props.title, titleStartsWith]);

  return (
    <Container>
      <div className="container">
        <Breadcrumbs />
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <ProductItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
