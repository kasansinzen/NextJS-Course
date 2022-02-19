import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import path from "path";
import fs from "fs/promises";
import React from "react";

interface IProductDetailPage {
  loadedProduct: any;
}
const ProductDetailPage: NextPage<IProductDetailPage> = (props) => {
  const {loadedProduct} = props;

  if(!loadedProduct) return <p>Loading...</p>;
  return <React.Fragment>
    <h1>{loadedProduct.title}</h1>
    <p>{loadedProduct.description}</p>
  </React.Fragment>
}

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as any);

  return data;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {params} = context;
  const productId = (params as any).id
  const data = await getData();

  const product = data.products.find((product: any) => product.id === productId);

  if(!product) return {notFound: true};
  return {
    props: {loadedProduct: product}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const pathWithParams = data.products.map((product: any) => ({params: {id: product.id}}));

  return {
    paths: pathWithParams,
    fallback: false
  }
}

export default ProductDetailPage;