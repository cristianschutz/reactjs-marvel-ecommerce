import React from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";

export function Breadcrumbs() {
  let { id } = useParams();
  return (
    <Container>
      {id ? (
        <ol>
          <li>Produtos</li>
          <li>{id}</li>
        </ol>
      ) : (
        <ol>
          <li>Home</li>
        </ol>
      )}
    </Container>
  );
}
