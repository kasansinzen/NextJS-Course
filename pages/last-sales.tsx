import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import useSWR from 'swr';

const api = `https://nextjs-course-2f95f-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json`;

interface IProps {
  sales: {id: string, username: string, value: number}[];
}
const LastSalesPage: NextPage<IProps> = (props) => {

  // const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [sales, setSales] = React.useState<{id: string, username: string, value: number}[]>(props.sales);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {data, error} = useSWR(api, fetcher);

  React.useEffect(() => {
    if(!data) return;
    const transformedSales = [];
    for(const key in data) transformedSales.push({id: key, username: data[key].username, value: data[key].value});
    setSales(transformedSales);
  }, [data]);

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   fetch(api).then(response => response.json().then(data => {
  //     const transformedSales = [];
  //     for(const key in data) transformedSales.push({id: key, username: data[key].username, value: data[key].value});
  //     setSales(transformedSales);
  //     setIsLoading(false);
  //   }));
  // }, []);

  if(error) return <p>Fail to load.</p>;
  if(!data && !sales) return <p>Loading...</p>;
  return <ul>
    {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.value}</li>)}
  </ul>
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(api);
  const data = await response.json();

  const transformedSales = [];
  for(const key in data) transformedSales.push({id: key, username: data[key].username, value: data[key].value});

  return {props: {sales: transformedSales, revalidate: 10}};
}

export default LastSalesPage;