import type { GetStaticProps, NextPage } from 'next';
import fs from "fs/promises";
import path from "path";
import Link from 'next/link';

const HomePage: NextPage<{products: any[]}> = (props) => {
  const {products} = props;

  return <ul>
    {products.map(product => <li key={product.id}><Link href={`/product/${product.id}`}>{product.title}</Link></li>)}
  </ul>
}

interface IProps {products: any[]};
export const getStaticProps: GetStaticProps<IProps> = async () => {
  console.log("Re-Generation...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as any);

  if(!data) return {redirect: {destination: '/no-data'}} as any;
  if(data.products.length === 0) return {notFound: true};

  return {
    props: {products: data.products},
    revalidate: 10
  };
}

export default HomePage
